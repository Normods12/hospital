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
Goal: Initialize the React project, set up version control, and install essential dependencies.
Tasks:
  - Create React project with Vite, TypeScript, and TailwindCSS.
  - Initialize Git repository and link to GitHub.
  - Install Axios for API calls.
  - Set up basic folder structure for components, pages, and services.
Exit Criteria: React app is running, TailwindCSS is configured, and project structure is ready.

### PHASE 2: Basic Layout & Navigation
Goal: Create the main application layout and basic navigation structure.
Tasks:
  - Design a responsive header with application title and branding.
  - Implement a sidebar or top navigation for main application routes (e.g., Dashboard, Admit Patient, Settings).
  - Create a placeholder home page component.
Exit Criteria: Application has a consistent layout, navigation elements are in place, and basic routing is functional.

### PHASE 3: Authentication UI (Login/Registration)
Goal: Develop the user interface for login and registration.
Tasks:
  - Create `LoginForm` and `RegistrationForm` components with input fields for username/email and password.
  - Implement basic client-side validation for form inputs (e.g., required fields, password strength).
  - Add placeholder buttons for form submission and links between login/registration.
Exit Criteria: Login and Registration forms are rendered, visually complete, and include basic client-side validation.

### PHASE 4: Patient Admission Form (Hardcoded Data)
Goal: Build the UI for admitting new patients using hardcoded data for initial development.
Tasks:
  - Create a `PatientAdmissionForm` component with input fields for patient details (name, age, gender) and vitals (heart rate, blood pressure, temperature).
  - Implement basic client-side validation for vital ranges (e.g., heart rate between 40-200).
  - Add a submit button and local state management for form data.
Exit Criteria: Patient admission form is fully rendered, can capture data locally, and includes client-side validation.

### PHASE 5: Triage Dashboard UI (Hardcoded Data)
Goal: Develop the UI for the triage dashboard, displaying patient data with hardcoded values.
Tasks:
  - Create a `TriageDashboard` component to display a list of patients.
  - Use a table or card-based layout to show patient information (name, vitals, severity score, admission time).
  - Implement client-side sorting logic using hardcoded data to simulate severity-based ordering (Critical, Urgent, Stable).
  - Add visual indicators for severity levels (e.g., color-coding rows or cards).
Exit Criteria: Triage dashboard is rendered, displaying hardcoded patient data sorted by severity with visual cues.

### PHASE 6: API Service Integration (Authentication)
Goal: Integrate the frontend with the backend authentication API.
Tasks:
  - Create an `AuthService` (e.g., `src/services/auth.ts`) to handle login and registration API calls using Axios.
  - Implement secure token storage (e.g., `localStorage` or `sessionStorage`) for JWT.
  - Update `LoginForm` and `RegistrationForm` to send data to the backend and handle successful/failed responses.
  - Implement a logout function.
Exit Criteria: Users can successfully log in and register, JWT tokens are stored, and authentication status is managed.

### PHASE 7: Protected Routes & Global State Management
Goal: Implement protected routes and global state management for user authentication status.
Tasks:
  - Set up React Router to protect routes that require authentication (e.g., `/dashboard`, `/admit-patient`).
  - Create an `AuthContext` (using React Context API) to manage user authentication state globally.
  - Implement a `ProtectedRoute` component to wrap authenticated routes.
  - Display user-specific content or redirect based on authentication status.
Exit Criteria: Application routes are protected, and user authentication state is managed globally and persistently.

### PHASE 8: Patient Admission API Integration
Goal: Connect the Patient Admission Form to the backend API.
Tasks:
  - Create a `PatientService` (e.g., `src/services/patient.ts`) to handle patient admission API calls.
  - Update the `PatientAdmissionForm` to send data to the backend via `PatientService` upon submission.
  - Handle successful admission responses (e.g., clear form, show success message) and API errors (e.g., display error message).
Exit Criteria: Patient admission form successfully submits data to the backend, and responses are handled appropriately.

### PHASE 9: Triage Dashboard API Integration
Goal: Connect the Triage Dashboard to the backend API to fetch real patient data.
Tasks:
  - Update the `PatientService` to include a method for fetching the triage queue from the backend.
  - Modify the `TriageDashboard` component to fetch patient data from the API on component mount.
  - Replace hardcoded data with actual data from the API, ensuring the severity-based sorting from the backend is displayed correctly.
Exit Criteria: Triage dashboard displays real patient data fetched from the backend API, correctly reflecting severity sorting.

### PHASE 10: Real-time Updates (Polling)
Goal: Implement basic real-time updates for the triage dashboard using polling.
Tasks:
  - Implement a polling mechanism within the `TriageDashboard` component to periodically fetch updated patient data from the API (e.g., every 5-10 seconds).
  - Use `useEffect` and `setInterval`/`clearInterval` to manage the polling lifecycle.
  - Update the dashboard display with the latest data received from the API.
Exit Criteria: Triage dashboard automatically refreshes with new data from the backend at regular intervals.

### PHASE 11: Error Handling & User Feedback
Goal: Implement robust error handling and provide clear user feedback for all API interactions.
Tasks:
  - Implement global error handling for API requests (e.g., Axios interceptors to catch common errors).
  - Use a notification library (e.g., `react-toastify`) to display user-friendly success, warning, and error messages.
  - Provide loading indicators (e.g., spinners, skeleton loaders) for asynchronous operations to improve UX.
Exit Criteria: All API interactions have appropriate error handling, and clear user feedback is provided for all operations.

### PHASE 12: Deployment Preparation & Final Review
Goal: Prepare the frontend for deployment and conduct a final review.
Tasks:
  - Optimize build for production (e.g., minification, code splitting, tree-shaking).
  - Configure environment variables for API endpoints (e.g., `VITE_API_BASE_URL`).
  - Conduct a final review of UI/UX, responsiveness across devices, and overall functionality.
  - Ensure all Git commits align with phase guidelines and code quality standards.
Exit Criteria: Frontend application is ready for deployment, all features are functional, responsive, and code quality is high.

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
- Exit criteria before proceeding: Frontend application is ready for deployment, all features are functional, responsive, and code quality is high.

## File Structure Snapshot
```
frontend/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── Auth/
  │   │   ├── Forms/
  │   │   ├── Layout/
  │   │   └── Triage/
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
- Environment variables list (VITE_API_BASE_URL).
- CI/CD pipeline steps (build, test, deploy to hosting service).
- Nginx configuration for serving static files (if applicable).
