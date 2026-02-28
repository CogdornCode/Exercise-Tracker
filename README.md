Exercise Tracker (MERN Stack)

Full-stack exercise tracking application built with MongoDB, Express, React, and Node.js. 
Designed and implemented RESTful CRUD APIs with proper HTTP methods, 
schema validation, error handling, and integrated them with a React frontend using client-side routing and shared state management. 
Configured a Vite development proxy for secure frontend–backend communication without CORS issues. 
Features include creating, editing, viewing, and deleting persistent exercise data through a responsive, accessible UI.

Key Concepts: RESTful API design, state management, async/await, data validation, full-stack integration

Tech Stack:
Frontend- React (with Vite), React Router, Fetch API, React Icons, CSS (responsive layout)
Backend-Node.js, Express, MongoDB, Mongoose

Features:
-Create new exercise entries
-View all exercises in a dynamic table
-Edit existing exercises
-Delete exercises
-Client-side routing with React Router
-RESTful API with proper HTTP methods
-MongoDB persistence with Mongoose schema validation
-Responsive, accessible layout with consistent global navigation


Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/exercise-tracker.git
cd exercise-tracker
2. Install backend dependencies
cd backend
npm install
3. Install frontend dependencies
cd ../frontend
npm install
4. Configure environment variables

Create a .env file in the backend folder:
MONGO_URI=your_mongodb_connection_string
PORT=3000

5. Start the backend server
cd backend
npm start

7. Start the frontend
cd frontend
npm run dev

Frontend typically runs on:

http://localhost:5173

Backend runs on:

http://localhost:3000



Design & Architecture:
-Global application state is managed in App.jsx and passed to child routes.
-Client-side routing is handled with React Router.
-Backend follows REST principles with proper status codes and error handling.
-Date validation is performed using Date.parse() to ensure ISO or YYYY-MM-DD format compliance.
-A Vite development proxy is configured to securely connect frontend requests to the backend without CORS issues.

Future Improvements:
-User authentication (JWT)
-Deployment to a cloud platform
-More UX/UI friendly
