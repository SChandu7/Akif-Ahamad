# ---- add to your app's views.py ----
import logging
from django.conf import settings
from django.core.mail import send_mail
from django.db import transaction
from django.utils import timezone
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle
from rest_framework.views import APIView

from .models import AppointmentRequest
from .serializers import AppointmentRequestSerializer

logger = logging.getLogger(__name__)


def _client_ip(request):
    fwd = request.META.get("HTTP_X_FORWARDED_FOR")      # set by nginx
    return fwd.split(",")[0].strip() if fwd else request.META.get("REMOTE_ADDR")


def _send_appointment_email(appt_id):
    appt = AppointmentRequest.objects.get(pk=appt_id)
    date = appt.preferred_date.strftime("%a, %d %b %Y") if appt.preferred_date else "Any day"
    body = (
        f"New appointment request from the website\n\n"
        f"Reference : {appt.reference}\n"
        f"Name      : {appt.name}\n"
        f"Phone     : {appt.phone}\n"
        f"Reason    : {appt.reason}\n"
        f"Date      : {date}\n"
        f"Note      : {appt.note or '-'}\n"
        f"Received  : {timezone.localtime(appt.created_at):%d %b %Y, %I:%M %p}\n"
    )
    send_mail(
        subject=f"New appointment request: {appt.name} ({appt.reference})",
        message=body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=settings.APPOINTMENT_NOTIFY_EMAILS,
        fail_silently=False,
    )


class AppointmentRequestCreateView(APIView):
    """POST /api/akif/appointments/  -> saves the request and emails the clinic."""
    permission_classes = [AllowAny]
    authentication_classes = []            # public form, no login, no CSRF
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "appointments"

    def post(self, request):
        serializer = AppointmentRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Bot filled the hidden field: pretend success, save nothing.
        if serializer.validated_data.get("website"):
            return Response({"ok": True}, status=status.HTTP_201_CREATED)

        appt = serializer.save(
            ip_address=_client_ip(request),
            user_agent=request.META.get("HTTP_USER_AGENT", "")[:255],
        )

        # Email after the row is saved. A mail failure never loses the request.
        def notify():
            try:
                _send_appointment_email(appt.pk)
            except Exception:
                logger.exception("Appointment email failed for %s", appt.reference)

        transaction.on_commit(notify)

        return Response({"ok": True, "reference": appt.reference}, status=status.HTTP_201_CREATED)
