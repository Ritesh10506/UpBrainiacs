import os
from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from google.oauth2 import id_token as google_id_token
from google.auth.transport import requests as google_requests

from app import models, schemas, database
from app.auth_utils import (
    create_access_token,
    get_current_student,
    generate_otp,
    otp_expiry,
    get_db,
)
from app.email_utils import send_otp_email

router = APIRouter(tags=["Auth"])

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")


# -------------------------
# Google login
# -------------------------
@router.post("/google", response_model=schemas.TokenResponse)
def google_login(payload: schemas.GoogleLoginRequest, db: Session = Depends(get_db)):
    if not GOOGLE_CLIENT_ID:
        raise HTTPException(status_code=500, detail="GOOGLE_CLIENT_ID not configured")

    try:
        idinfo = google_id_token.verify_oauth2_token(
            payload.credential,
            google_requests.Request(),
            GOOGLE_CLIENT_ID,
        )
    except ValueError:
        raise HTTPException(status_code=401, detail="Invalid Google token")

    google_sub = idinfo["sub"]
    email = idinfo.get("email")
    full_name = idinfo.get("name", "")
    picture = idinfo.get("picture")

    student = (
        db.query(models.StudentAccount)
        .filter(models.StudentAccount.google_id == google_sub)
        .first()
    )

    if not student:
        student = (
            db.query(models.StudentAccount)
            .filter(models.StudentAccount.email == email)
            .first()
        )

    if student:
        student.google_id = google_sub
        student.full_name = full_name or student.full_name
        student.profile_picture = picture or student.profile_picture
        student.last_login = datetime.utcnow()
    else:
        student = models.StudentAccount(
            google_id=google_sub,
            email=email,
            full_name=full_name,
            profile_picture=picture,
        )
        db.add(student)

    db.commit()
    db.refresh(student)

    token = create_access_token(student.id)

    return schemas.TokenResponse(
        access_token=token,
        student_id=student.id,
        student_email=student.email,
        student_full_name=student.full_name or "",
        student_profile_picture=student.profile_picture or "",
    )


# -------------------------
# Email OTP login
# -------------------------
@router.post("/otp/request")
def request_otp(payload: schemas.OTPRequest, db: Session = Depends(get_db)):
    email = payload.email.strip().lower()

    student = (
        db.query(models.StudentAccount)
        .filter(models.StudentAccount.email == email)
        .first()
    )

    if not student:
        student = models.StudentAccount(email=email)
        db.add(student)

    otp = generate_otp()
    student.otp_code = otp
    student.otp_expires_at = otp_expiry()

    db.commit()

    send_otp_email(email, otp)

    return {"message": "OTP sent to your email"}


@router.post("/otp/verify", response_model=schemas.TokenResponse)
def verify_otp(payload: schemas.OTPVerify, db: Session = Depends(get_db)):
    email = payload.email.strip().lower()

    student = (
        db.query(models.StudentAccount)
        .filter(models.StudentAccount.email == email)
        .first()
    )

    if not student or not student.otp_code:
        raise HTTPException(status_code=400, detail="No OTP was requested for this email")

    if student.otp_expires_at is None or student.otp_expires_at < datetime.utcnow():
        raise HTTPException(status_code=400, detail="OTP has expired, please request a new one")

    if student.otp_code != payload.otp.strip():
        raise HTTPException(status_code=400, detail="Incorrect OTP")

    student.otp_code = None
    student.otp_expires_at = None
    student.last_login = datetime.utcnow()

    db.commit()
    db.refresh(student)

    token = create_access_token(student.id)

    return schemas.TokenResponse(
        access_token=token,
        student_id=student.id,
        student_email=student.email,
        student_full_name=student.full_name or "",
        student_profile_picture=student.profile_picture or "",
    )


# -------------------------
# Current logged-in student
# -------------------------
@router.get("/me", response_model=schemas.StudentAccountOut)
def get_me(current_student: models.StudentAccount = Depends(get_current_student)):
    return current_student