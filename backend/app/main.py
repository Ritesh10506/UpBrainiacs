from fastapi import FastAPI, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.routers import student, universities, services, appointments
from app.database import Base, engine, SessionLocal
from app import models

# Create all tables in the database
Base.metadata.create_all(bind=engine)

# Tags metadata for Swagger UI
tags_metadata = [
    {"name": "Students", "description": "Operations with students"},
    {"name": "Universities", "description": "Operations with universities"},
    {"name": "Services", "description": "Operations with services"},
    {"name": "Appointments", "description": "Operations with appointments"},
    {"name": "Health", "description": "Health check endpoints"},
]

# Initialize FastAPI app
app = FastAPI(
    title="UpBrainiacs Backend",
    version="1.2.0",
    description="Backend API for managing students, universities, services, and appointments",
    openapi_tags=tags_metadata,
)

# Allow frontend or external apps to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict to ["http://localhost:3000"] for React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency for DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Root endpoint
@app.get("/", tags=["Health"])
def root():
    return {"message": "UpBrainiacs API is running 🚀"}

# Database health check
@app.get("/health/db", tags=["Health"])
def health_db(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))   # ✅ wrap in text()
        return {"status": "Database connected ✅"}
    except Exception as e:
        return {"status": "Database error ❌", "detail": str(e)}

# Custom exception handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"error": "Internal Server Error", "detail": str(exc)},
    )

# Startup event
@app.on_event("startup")
async def startup_event():
    print("🚀 Application startup complete")

# Shutdown event
@app.on_event("shutdown")
async def shutdown_event():
    print("🛑 Application shutdown complete")

# Include routers with prefixes + tags
app.include_router(student.router, prefix="/students", tags=["Students"])
app.include_router(universities.router, prefix="/universities", tags=["Universities"])
app.include_router(services.router, prefix="/services", tags=["Services"])
app.include_router(appointments.router, prefix="/appointments", tags=["Appointments"])
