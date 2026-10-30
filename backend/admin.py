# ---- add to your app's admin.py ----
from django.contrib import admin
from .models import AppointmentRequest


@admin.register(AppointmentRequest)
class AppointmentRequestAdmin(admin.ModelAdmin):
    list_display = ("reference", "name", "phone", "reason", "preferred_date", "status", "created_at")
    list_filter = ("status", "reason", "created_at")
    search_fields = ("reference", "name", "phone")
    list_editable = ("status",)
    readonly_fields = ("reference", "ip_address", "user_agent", "created_at")
