# ---- add to your app's models.py ----
import secrets
from django.db import models
from django.utils import timezone


def make_reference():
    # e.g. AH-20261030-4F2A  (short code the clinic can say on the phone)
    return f"AH-{timezone.localdate():%Y%m%d}-{secrets.token_hex(2).upper()}"


class AppointmentRequest(models.Model):
    STATUS_CHOICES = [
        ("new", "New"),
        ("contacted", "Contacted"),
        ("confirmed", "Confirmed"),
        ("cancelled", "Cancelled"),
    ]

    reference = models.CharField(max_length=24, unique=True, default=make_reference, editable=False)
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=15)
    reason = models.CharField(max_length=120)
    preferred_date = models.DateField(null=True, blank=True)
    note = models.TextField(blank=True)
    source = models.CharField(max_length=40, default="portfolio")
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, default="new")
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "akif_appointment_requests"   # separate table
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.reference} - {self.name} ({self.phone})"
