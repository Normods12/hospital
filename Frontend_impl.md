Project: Patient Triage & Emergency Admission System
Team: 4 members (2 Frontend, 2 Backend)
Stack: React, TypeScript, TailwindCSS, Axios
Goal: Enable hospital staff to rapidly admit emergency patients, securely record initial vitals, and automatically prioritize them in a triage queue based on severity.

## Phase Guidelines
To ensure high velocity and clear progress, follow these strict rules for each document:
- **Phase Count**: This document contains 12 phases.
- **Time Constraint**: Each phase is designed to be completable in 15-25 minutes maximum.
- **Atomic Work**: Each phase represents one focused unit of work.
- **Git Strategy**: Each phase corresponds to exactly one Git commit.

## Frontend Implementation Plan

### PHASE 1: Project Setup & Core Dependencies
Goal: Initialize the frontend project, set up version control, and install essential dependencies.
Tasks:
  - Create React project with TypeScript and TailwindCSS.
  - Initialize Git repository.
  - Install Axios for API calls.
  - Set up basic folder structure for components, pages, and services.
Exit Criteria: React app is running, TailwindCSS is configured, and project structure is ready.

### PHASE 2: Basic Layout & Navigation
Goal: Create the main application layout and basic navigation structure.
Tasks:
  - Design a responsive header with application title.
  - Implement a sidebar or top navigation for future routes (e.g., Dashboard, Admit Patient).
  - Create a placeholder home page.
Exit Criteria: Application has a consistent layout and navigation elements are in place.

### PHASE 3: Authentication UI (Login/Registration)
Goal: Develop the user interface for login and registration.
Tasks:
  - Create Login and Registration forms with input fields for username/email and password.
  - Implement basic client-side validation for form inputs.
  - Add placeholder buttons for form submission.
Exit Criteria: Login and Registration forms are rendered and visually complete.

### PHASE 4: Patient Admission Form (Hardcoded Data)
Goal: Build the UI for admitting new patients using hardcoded data for initial development.
Tasks:
  - Create a form with input fields for patient details (name, age, gender) and vitals (heart rate, blood pressure, temperature).
  - Implement basic client-side validation for vital ranges.
  - Add a submit button.
Exit Criteria: Patient admission form is fully rendered and can capture data locally.

### PHASE 5: Triage Dashboard UI (Hardcoded Data)
Goal: Develop the UI for the triage dashboard, displaying patient data with hardcoded values.
Tasks:
  - Create a table or card-based layout to display patient information (name, vitals, severity score).
  - Implement sorting logic on the frontend using hardcoded data to simulate severity-based ordering.
  - Add visual indicators for severity levels (e.g., color-coding Critical, Urgent, Stable).
Exit Criteria: Triage dashboard is rendered, displaying hardcoded patient data sorted by severity.

### PHASE 6: API Service Integration (Authentication)
Goal: Integrate the frontend with the backend authentication API.
Tasks:
  - Create an `AuthService` to handle login and registration API calls using Axios.
  - Implement token storage (e.g., localStorage) for JWT.
  - Update Login/Registration forms to send data to backend and handle responses.
Exit Criteria: Users can successfully log in and register, and JWT tokens are stored.

### PHASE 7: Protected Routes & Global State Management
Goal: Implement protected routes and global state management for user authentication status.
Tasks:
  - Set up React Router to protect routes that require authentication.
  - Use React Context or a state management library (e.g., Zustand, Redux Toolkit) to manage user authentication state globally.
  - Display user-specific content or redirect based on authentication status.
Exit Criteria: Application routes are protected, and user authentication state is managed globally.

### PHASE 8: Patient Admission API Integration
Goal: Connect the Patient Admission Form to the backend API.
Tasks:
  - Create a `PatientService` to handle patient admission API calls.
  - Update the Patient Admission Form to send data to the backend via `PatientService`.
  - Handle successful admission responses and display feedback to the user.
Exit Criteria: Patient admission form successfully submits data to the backend and handles responses.

### PHASE 9: Triage Dashboard API Integration
Goal: Connect the Triage Dashboard to the backend API to fetch real patient data.
Tasks:
  - Update the `PatientService` to include a method for fetching the triage queue.
  - Modify the Triage Dashboard to fetch patient data from the backend API.
  - Replace hardcoded data with actual data from the API, maintaining severity-based sorting.
Exit Criteria: Triage dashboard displays real patient data fetched from the backend API, sorted by severity.

### PHASE 10: Real-time Updates (Polling)
Goal: Implement basic real-time updates for the triage dashboard using polling.
Tasks:
  - Implement a polling mechanism in the Triage Dashboard component to periodically fetch updated patient data from the API (e.g., every 5-10 seconds).
  - Update the dashboard display with the latest data.
Exit Criteria: Triage dashboard automatically refreshes with new data at regular intervals.

### PHASE 11: Error Handling & User Feedback
Goal: Implement robust error handling and provide clear user feedback for all API interactions.
Tasks:
  - Implement global error handling for API requests (e.g., Axios interceptors).
  - Display user-friendly error messages for failed API calls (e.g., toast notifications).
  - Provide loading indicators for asynchronous operations.
Exit Criteria: All API interactions have appropriate error handling and user feedback mechanisms.

### PHASE 12: Deployment Preparation & Final Review
Goal: Prepare the frontend for deployment and conduct a final review.
Tasks:
  - Optimize build for production (e.g., minification, code splitting).
  - Configure environment variables for API endpoints.
  - Conduct a final review of UI/UX, responsiveness, and functionality.
  - Ensure all Git commits align with phase guidelines.
Exit Criteria: Frontend application is ready for deployment, all features are functional, and code quality is high.

## AGENTS.md Block
## Context
A full-stack application for hospital staff to manage emergency patient admissions, record vitals, and view a real-time, severity-sorted triage queue.

## Current Phase
PHASE 12 — Deployment Preparation & Final Review

## Stack
React, TypeScript, TailwindCSS, Axios

## Rules
- Don\'t introduce new UI frameworks or libraries without explicit approval.
- Prefix commits with PHASE-N:
- Exit criteria before proceeding: Frontend application is ready for deployment, all features are functional, and code quality is high.

## File Structure Snapshot
```
frontend/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── Auth/
  │   │   ├── Forms/
  │   │   └── Layout/
  │   ├── hooks/
  │   ├── pages/
  │   │   ├── Auth/
  │   │   ├── Dashboard/
  │   │   └── PatientAdmission/
  │   ├── services/
  │   │   ├── auth.ts
  │   │   └── patient.ts
  │   ├── context/
  │   │   └── AuthContext.tsx
  │   ├── App.tsx
  │   ├── index.css
  │   └── main.tsx
  ├── tailwind.config.js
  ├── tsconfig.json
  ├── package.json
  └── .env
```

## Deployment Checklist (Final Phase)
- Environment variables list (REACT_APP_API_BASE_URL)
- CI/CD pipeline steps (build, test, deploy to hosting service).
- Nginx configuration for serving static files (if applicable).
