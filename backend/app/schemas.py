from pydantic import BaseModel
from datetime import datetime
from typing import Literal, Optional

STATUSES = ("New", "Contacted", "Applied", "Admitted", "Rejected")

# -------------------------
# Student Schemas (inquiry/lead form)
# -------------------------

class StudentBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    mobile: str
    degree_pref: str
    country_pref: str
    expected_neet_score: str


class StudentCreate(StudentBase):
    pass


class Student(StudentBase):
    id: int
    status: str = "New"

    class Config:
        from_attributes = True


class StudentStatusUpdate(BaseModel):
    status: Literal[STATUSES]


# -------------------------
# University Schemas
# -------------------------

class UniversityBase(BaseModel):
    name: str
    image_url: str | None = ""
    description: str | None = ""
    established: str | None = ""
    university_type: str | None = ""
    location: str | None = ""
    country: str
    duration: str | None = ""
    medium: str | None = ""
    recognition: str | None = ""
    degree_type: str
    mbbs_seats: str | None = ""
    fees: str
    scholarships: str

class UniversityCreate(UniversityBase):
    pass


class University(UniversityBase):
    id: int

    class Config:
        from_attributes = True


# -------------------------
# Service Schemas
# -------------------------

class ServiceBase(BaseModel):
    name: str
    description: str | None = ""


class ServiceCreate(ServiceBase):
    pass


class Service(ServiceBase):
    id: int

    class Config:
        from_attributes = True


# -------------------------
# Appointment Schemas
# -------------------------

class AppointmentBase(BaseModel):
    student_id: int
    date: datetime
    notes: str | None = ""


class AppointmentCreate(AppointmentBase):
    pass


class Appointment(AppointmentBase):
    id: int

    class Config:
        from_attributes = True


# -------------------------
# Auth Schemas (Student login accounts)
# -------------------------

class StudentAccountOut(BaseModel):
    id: int
    email: str
    # OTP-created accounts have no name/photo yet (NULL in DB)
    full_name: Optional[str] = ""
    profile_picture: Optional[str] = ""

    class Config:
        from_attributes = True


class StudentApplication(BaseModel):
    enquiry: Optional[Student] = None
    appointments: list[Appointment] = []


class GoogleLoginRequest(BaseModel):
    credential: str


class OTPRequest(BaseModel):
    email: str


class OTPVerify(BaseModel):
    email: str
    otp: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    student_id: int
    student_email: str
    student_full_name: str = ""
    student_profile_picture: str = ""


# -------------------------
# Admin Schemas
# -------------------------

class AdminLoginRequest(BaseModel):
    email: str
    password: str


class AdminRegisterRequest(BaseModel):
    email: str
    password: str
    full_name: str = ""


class AdminTokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    admin_id: int
    admin_email: str
    admin_full_name: str = ""


class AdminOut(BaseModel):
    id: int
    email: str
    full_name: str = ""

    class Config:
        from_attributes = True