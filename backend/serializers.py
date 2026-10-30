# ---- add to your app's serializers.py ----
import re
from django.utils import timezone
from rest_framework import serializers
from .models import AppointmentRequest


class AppointmentRequestSerializer(serializers.ModelSerializer):
    # Honeypot: hidden field on the website. Real people leave it empty.
    website = serializers.CharField(write_only=True, required=False, allow_blank=True)

    class Meta:
        model = AppointmentRequest
        fields = ["name", "phone", "reason", "preferred_date", "note", "source", "website"]

    def validate_name(self, value):
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Enter your name.")
        return value

    def validate_phone(self, value):
        digits = re.sub(r"\D", "", value)[-10:]
        if not re.fullmatch(r"[6-9]\d{9}", digits):
            raise serializers.ValidationError("Enter a valid 10-digit mobile number.")
        return digits

    def validate_preferred_date(self, value):
        if value and value < timezone.localdate():
            raise serializers.ValidationError("Choose today or a later date.")
        return value

    def create(self, validated_data):
        validated_data.pop("website", None)
        return super().create(validated_data)
