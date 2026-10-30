# ---- add to your project's urls.py (or your app's urls.py) ----
from django.urls import path
from yourapp.views import AppointmentRequestCreateView   # change "yourapp"

urlpatterns = [
    # ... your existing urls ...
    path("api/akif/appointments/", AppointmentRequestCreateView.as_view(), name="akif-appointment-create"),
]
