from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .database import Base

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100))
    last_name = Column(String(100))
    email = Column(String(150), unique=True, index=True)
    mobile = Column(String(20))
    degree_pref = Column(String(50))
    country_pref = Column(String(50))
    expected_neet_score= Column(String(50))


class University(Base):
    __tablename__ = "universities"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200))
    country = Column(String(100))
    degree_type = Column(String(50))
    fees = Column(String(50))
    scholarships = Column(String(200))

class Service(Base):
    __tablename__ = "services"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    description = Column(String(300))

class Appointment(Base):
    __tablename__ = "appointments"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"))
    date = Column(DateTime)
    notes = Column(String(300))

    student = relationship("Student")
