import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "student") {
      navigate("/dashboard");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          RC
        </div>

        <h1 className="login-title">
          Remote Coding
        </h1>

        <p className="login-subtitle">
          Assessment Platform
        </p>

        <div className="role-buttons">
          <button
            className={`role-button ${role === "student" ? "active" : ""}`}
            onClick={() => setRole("student")}
            type="button"
          >
            Student
          </button>

          <button
            className={`role-button ${role === "admin" ? "active" : ""}`}
            onClick={() => setRole("admin")}
            type="button"
          >
            Admin
          </button>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        <p className="login-footer">
          Secure online coding assessment
        </p>

      </div>
    </div>
  );
}

export default Login;