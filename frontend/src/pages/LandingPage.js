import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/langingpage.css"; // Import the CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (token) {
    navigate("/"); // If user is already logged in, redirect to home
  }

  const handleRegister = () => {
    navigate("/register"); // Navigate to Register page
  };

  const handleLogin = () => {
    navigate("/login"); // Navigate to Login page
  };

  return (
    <>
      <div className="bg">
        <div className="lp">
          <h1>Welcome to Book Review App</h1>
          <p>Please register or log in to continue</p>
          <div className="buttons">
            <button onClick={handleRegister} className="action-btn" style={{ marginRight: "10px" }}>
              Register
            </button>
            <button onClick={handleLogin} className="action-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
