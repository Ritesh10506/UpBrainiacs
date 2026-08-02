import os
import requests

BREVO_API_KEY = os.getenv("BREVO_API_KEY")
BREVO_SENDER_EMAIL = os.getenv("BREVO_SENDER_EMAIL")
BREVO_SENDER_NAME = os.getenv("BREVO_SENDER_NAME", "UpBrainiacs")

BREVO_URL = "https://api.brevo.com/v3/smtp/email"


def send_otp_email(to_email: str, otp: str) -> None:
    if not BREVO_API_KEY or not BREVO_SENDER_EMAIL:
        raise ValueError("BREVO_API_KEY / BREVO_SENDER_EMAIL not set in .env file")

    payload = {
        "sender": {"name": BREVO_SENDER_NAME, "email": BREVO_SENDER_EMAIL},
        "to": [{"email": to_email}],
        "subject": "Your UpBrainiacs login code",
        "htmlContent": f"""
            <div style="font-family: Arial, sans-serif; padding: 24px;">
                <h2 style="color:#b3151f;">UpBrainiacs</h2>
                <p>Your one-time login code is:</p>
                <h1 style="letter-spacing: 6px;">{otp}</h1>
                <p>This code expires in 10 minutes. If you didn't request this, you can ignore this email.</p>
            </div>
        """,
    }

    headers = {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
    }

    response = requests.post(BREVO_URL, json=payload, headers=headers, timeout=10)
    response.raise_for_status()