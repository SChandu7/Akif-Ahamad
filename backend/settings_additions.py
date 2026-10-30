# ---- add to settings.py (keep your existing EMAIL_* settings) ----

# Who gets the "new appointment" email
APPOINTMENT_NOTIFY_EMAILS = [
    "clinic@example.com",          # TODO: Aaira clinic / Dr. Akif email
]
# DEFAULT_FROM_EMAIL = "Aaira Heart <no-reply@yourdomain.com>"   # if not already set

# Allow the portfolio site to call the API (django-cors-headers)
CORS_ALLOWED_ORIGINS = [
    # ... keep your existing origins (clinova.org.in etc.) ...
    "https://drakifbaig.com",      # TODO: the portfolio's real domain
    "http://localhost:8000",       # local testing
]

# Spam limit: max 10 requests per hour from one IP
REST_FRAMEWORK = {
    # ... keep your existing REST_FRAMEWORK keys ...
    "DEFAULT_THROTTLE_RATES": {
        # ... keep existing rates ...
        "appointments": "10/hour",
    },
}
