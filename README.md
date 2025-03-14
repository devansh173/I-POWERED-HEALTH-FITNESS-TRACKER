# Health & Fitness Tracker (MERN)

This is a comprehensive Health & Fitness Tracker application built with the MERN stack. The app features real-time tracking of workouts and health metrics, personalized AI-powered recommendations, and a responsive UI with Next.js and TailwindCSS.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Testing](#testing)
- [CI/CD & Deployment](#cicd--deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication:** Secure login with JWT and role-based access (User, Trainer, Admin).
- **Real-Time Data Tracking:** Live workout session updates using Socket.io.
- **Interactive Charts:** Visualize activity data with Chart.js.
- **AI-Powered Recommendations:** Get personalized workout and diet plans using AI integrations.
- **Responsive Design:** Mobile-friendly UI built with Next.js and TailwindCSS.
- **GraphQL & REST APIs:** Flexible data querying with GraphQL along with traditional REST endpoints.

## Tech Stack
- **Frontend:** Next.js, React, TailwindCSS, Chart.js, React-Chartjs-2, Axios
- **Backend:** Node.js, Express, Socket.io, Apollo Server (GraphQL), JWT, bcryptjs
- **Database:** MongoDB with Mongoose
- **Caching:** Redis (optional)
- **CI/CD:** GitHub Actions


## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local instance or MongoDB Atlas)
- Redis (if caching is required)
- Docker (optional, for containerization)

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2.Install dependencies:
```
npm install
```
3.Run the development server:
```
npm run dev
Open your browser at http://localhost:3000
```

### Backend Setup
1.Navigate to the backend folder:
```
cd backend
```
2.Create a .env file with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/healthtracker
JWT_SECRET=your_jwt_secret
PORT=5000
```
3.Install dependencies:
```
npm install
```
Start the server:
```
npm run dev
```
The backend API will be available at http://localhost:5000
Usage
## Authentication:
Register and log in using the endpoints under /api/auth.
####Workout Management:
Create and fetch workouts via /api/workouts.
####GraphQL API:
Visit http://localhost:5000/graphql to explore GraphQL queries and mutations.
####Real-Time Updates:
Connect to the Socket.io server for live workout session data and leaderboard updates.
Testing
####Backend Tests:
Run tests using:
```
npm run test
```
(Ensure you’re in the backend folder.)
####Frontend Tests:
Use React Testing Library and Cypress for component and E2E testing respectively.
###CI/CD & Deployment
CI/CD:
The repository includes a GitHub Actions workflow (.github/workflows/nodejs.yml) to run tests and automate deployments.
Deployment:
The project can be deployed on cloud providers such as AWS, GCP, or Azure. Ensure proper configuration of environment variables and secrets.


