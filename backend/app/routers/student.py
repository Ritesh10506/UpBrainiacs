
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas, database

router = APIRouter(
    tags=["Students"]
)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.Student)
def create_student(
    student: schemas.StudentCreate,
    db: Session = Depends(get_db)
):
    db_student = models.Student(**student.dict())

    db.add(db_student)
    db.commit()
    db.refresh(db_student)

    return db_student


@router.get("/", response_model=list[schemas.Student])
def get_students(
    db: Session = Depends(get_db)
):
    return db.query(models.Student).all()


@router.get("/{student_id}", response_model=schemas.Student)
def get_student(
    student_id: int,
    db: Session = Depends(get_db)
):
    student = (
        db.query(models.Student)
        .filter(models.Student.id == student_id)
        .first()
    )

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    return student


@router.put("/{student_id}",
            response_model=schemas.Student)
def update_student(
    student_id: int,
    student: schemas.StudentCreate,
    db: Session = Depends(get_db)
):
    db_student = (
        db.query(models.Student)
        .filter(models.Student.id == student_id)
        .first()
    )

    if not db_student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    for key, value in student.dict().items():
        setattr(db_student, key, value)

    db.commit()
    db.refresh(db_student)

    return db_student


@router.delete("/{student_id}")
def delete_student(
    student_id: int,
    db: Session = Depends(get_db)
):
    db_student = (
        db.query(models.Student)
        .filter(models.Student.id == student_id)
        .first()
    )

    if not db_student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    db.delete(db_student)
    db.commit()

    return {
        "message": "Student deleted successfully"
    }

