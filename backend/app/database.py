from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Connection string (update username/password if needed)
DATABASE_URL = "mysql+mysqlconnector://upbrainiacs_user:securepass@localhost:3306/upbrainiacs"

# Engine: manages connection
engine = create_engine(DATABASE_URL)

# Session: used in routers to query DB
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base: used by models to define tables
Base = declarative_base()
