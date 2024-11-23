import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/style/register.css"
const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:5000/api/auth/register", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <>
      <div className="r">
      <div className="r1">
      <div className="r2">
        <form onSubmit={handleRegister} className="form-container">
          <h2>Register</h2>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
      </div>
    </>
  );
};

export default Register;
