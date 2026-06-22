from pydantic import BaseModel
from datetime import datetime

# -------------------------
# Student Schemas
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

    class Config:
        from_attributes = True


# -------------------------
# University Schemas
# -------------------------

class UniversityBase(BaseModel):
    name: str
    country: str
    degree_type: str
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
    description: str


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
    notes: str


class AppointmentCreate(AppointmentBase):
    pass


class Appointment(AppointmentBase):
    id: int

    class Config:
        from_attributes = True