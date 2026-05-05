Project: Patient Triage & Emergency Admission System
Team: 4 members (2 Frontend, 2 Backend)
Stack: Python (FastAPI), PostgreSQL, SQLAlchemy
Goal: Enable hospital staff to rapidly admit emergency patients, securely record initial vitals, and automatically prioritize them in a triage queue based on severity.

## Phase Guidelines
To ensure high velocity and clear progress, follow these strict rules for each document:
- **Phase Count**: This document contains 12 phases.
- **Time Constraint**: Each phase is designed to be completable in 15-25 minutes maximum.
- **Atomic Work**: Each phase represents one focused unit of work.
- **Git Strategy**: Each phase corresponds to exactly one Git commit.

## Backend Implementation Plan

### PHASE 1: Project Setup & Core Dependencies
Goal: Initialize the backend project, set up version control, and install essential dependencies.
Tasks:
  - Create project directory and initialize Git repository.
  - Set up a virtual environment.
  - Install FastAPI, Uvicorn, and other core dependencies.
  - Create a basic `main.py` with a root endpoint.
Exit Criteria: Project structure is initialized, core dependencies are installed, and a basic FastAPI app runs successfully.

### PHASE 2: Database Schema Design (Patient & Vitals)
Goal: Define the database schema for Patient and Vitals entities, including severity score fields.
Tasks:
  - Define `Patient` entity with fields: `id`, `name`, `age`, `gender`, `admission_time`, `severity_score`.
  - Define `Vitals` entity with fields: `id`, `patient_id`, `heart_rate`, `blood_pressure_systolic`, `blood_pressure_diastolic`, `temperature`, `recorded_at`.
  - Establish relationships between `Patient` and `Vitals`.
Exit Criteria: SQL schema definitions for `Patient` and `Vitals` are documented.

### PHASE 3: Database Setup & Migration
Goal: Configure PostgreSQL connection and set up initial database migrations.
Tasks:
  - Install `psycopg2-binary` and `SQLAlchemy`.
  - Configure database connection string in a settings file.
  - Set up Alembic for database migrations.
  - Create initial migration script for `Patient` and `Vitals` tables.
  - Run migration to create tables in the database.
Exit Criteria: Database tables for `Patient` and `Vitals` are created in PostgreSQL.

### PHASE 4: Patient Entity & Repository
Goal: Implement the `Patient` SQLAlchemy model and its data access layer.
Tasks:
  - Create `Patient` model using SQLAlchemy declarative base.
  - Implement a `PatientRepository` for CRUD operations (create, read).
Exit Criteria: `Patient` model and repository are implemented and basic patient creation/retrieval is functional.

### PHASE 5: Vitals Entity & Repository
Goal: Implement the `Vitals` SQLAlchemy model and its data access layer.
Tasks:
  - Create `Vitals` model using SQLAlchemy declarative base.
  - Implement a `VitalsRepository` for CRUD operations (create, read).
Exit Criteria: `Vitals` model and repository are implemented and basic vitals creation/retrieval is functional.

### PHASE 6: Severity Score Calculation Service
Goal: Develop the core logic for calculating the patient severity score.
Tasks:
  - Create a `SeverityService`.
  - Implement a basic algorithm to calculate `severity_score` based on `heart_rate`, `blood_pressure`, and `temperature` (e.g., ranges for Critical, Urgent, Stable).
  - Ensure the service can be called with `Vitals` data and returns a score.
Exit Criteria: `SeverityService` is implemented and unit tested with various vital inputs to produce correct scores.

### PHASE 7: Patient Admission Service
Goal: Implement the service logic for admitting new patients, including saving vitals and calculating severity.
Tasks:
  - Create an `AdmissionService`.
  - Implement a method to admit a patient, which takes patient details and vitals.
  - This method should save the patient, save the vitals, and call the `SeverityService` to update the patient's `severity_score`.
Exit Criteria: `AdmissionService` is implemented and can successfully admit a patient, record vitals, and update severity score.

### PHASE 8: Triage Queue Service (Sorting Logic)
Goal: Implement the service to retrieve and sort patients based on their severity score.
Tasks:
  - Create a `TriageService`.
  - Implement a method to retrieve all active patients, sorted by `severity_score` (descending) and then by `admission_time` (ascending).
Exit Criteria: `TriageService` can fetch and sort patients correctly based on severity.

### PHASE 9: Authentication Module
Goal: Implement user authentication for secure API access.
Tasks:
  - Install `python-jose` and `passlib`.
  - Implement JWT token generation and validation.
  - Create user registration and login endpoints.
  - Implement password hashing.
Exit Criteria: Users can register, log in, and receive valid JWT tokens.

### PHASE 10: Authorization Module
Goal: Implement role-based authorization for API endpoints.
Tasks:
  - Define user roles (e.g., `staff`, `admin`).
  - Implement FastAPI dependencies to protect endpoints based on user roles.
  - Apply authorization to relevant services (e.g., only `staff` can admit patients).
Exit Criteria: API endpoints are protected by role-based authorization.

### PHASE 11: Patient API Endpoints (Admission & Retrieval)
Goal: Create REST API endpoints for patient admission and triage queue retrieval.
Tasks:
  - Create FastAPI routers for patient admission (`POST /patients`) and triage queue (`GET /triage`).
  - Integrate `AdmissionService` and `TriageService` with these endpoints.
  - Apply authentication and authorization to these endpoints.
Exit Criteria: API endpoints are functional and secure, allowing patient admission and triage queue retrieval.

### PHASE 12: API Validation & Documentation
Goal: Ensure API endpoints are fully validated and documented.
Tasks:
  - Review all API endpoints for proper request/response model validation using Pydantic.
  - Verify that FastAPI's automatic OpenAPI (Swagger UI) documentation is accurate and complete.
  - Manually test all endpoints using Postman or curl to confirm functionality and security.
Exit Criteria: All API endpoints are validated, documented in Swagger UI, and confirmed functional via Postman/curl.

## AGENTS.md Block
## Context
A full-stack application for hospital staff to manage emergency patient admissions, record vitals, and view a real-time, severity-sorted triage queue.

## Current Phase
PHASE 12 — API Validation & Documentation

## Stack
Python (FastAPI), PostgreSQL, SQLAlchemy

## Rules
- Don't modify existing database schema without a new migration.
- Prefix commits with PHASE-N:
- Exit criteria before proceeding: All API endpoints are validated, documented in Swagger UI, and confirmed functional via Postman/curl.

## File Structure Snapshot
```
backend/
  ├── main.py
  ├── app/
  │   ├── __init__.py
  │   ├── api/
  │   │   ├── __init__.py
  │   │   └── endpoints/
  │   │       ├── __init__.py
  │   │       ├── patients.py
  │   │       └── triage.py
  │   ├── core/
  │   │   ├── __init__.py
  │   │   └── security.py
  │   ├── crud/
  │   │   ├── __init__.py
  │   │   ├── patient.py
  │   │   └── vitals.py
  │   ├── db/
  │   │   ├── __init__.py
  │   │   ├── base.py
  │   │   └── session.py
  │   ├── models/
  │   │   ├── __init__.py
  │   │   ├── patient.py
  │   │   └── vitals.py
  │   ├── schemas/
  │   │   ├── __init__.py
  │   │   ├── patient.py
  │   │   └── vitals.py
  │   └── services/
  │       ├── __init__.py
  │       ├── admission.py
  │       ├── severity.py
  │       └── triage.py
  ├── alembic/
  │   ├── versions/
  │   └── env.py
  ├── alembic.ini
  ├── requirements.txt
  └── .env
```

## Deployment Checklist (Final Phase)
- Environment variables list (DATABASE_URL, SECRET_KEY, etc.)
- CI/CD pipeline steps (build, test, deploy to staging/production)
- Docker Compose configuration for backend service and PostgreSQL.
- Nginx reverse proxy rules for API gateway (if applicable).
