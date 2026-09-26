import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import AssessmentDetails from "./pages/AssessmentDetails";

import AdminDashboard from "./pages/AdminDashboard";
import Assessments from "./pages/Assessments";
import ManageQuestions from "./pages/ManageQuestions";
import Candidates from "./pages/Candidates";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* STUDENT */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/assessment-details"
          element={<AssessmentDetails />}
        />

        <Route
          path="/assessment"
          element={<Assessment />}
        />


        {/* ADMIN */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/assessments"
          element={<Assessments />}
        />

        <Route
          path="/admin/assessments/questions"
          element={<ManageQuestions />}
        />

        <Route
          path="/admin/candidates"
          element={<Candidates />}
        />

        <Route
          path="/admin/results"
          element={<Results />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;