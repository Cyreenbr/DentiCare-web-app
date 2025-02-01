import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons
import "./SignIn.css";
import logo from "../../assets/logo.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signin-container">
      {/* Left Section: Welcome Message with Logo */}
      <div className="welcome-section">
        <img src={logo} alt="DentiCare Logo" className="logo" />
        <p>Your Smart Dental Assistant</p>
        <a href="/read-more">Read More</a>
      </div>

      {/* Right Section: Login Form */}
      <div className="form-section">
        <h2>Hello Again!</h2>
        <p>Welcome Back</p>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="input-group">
            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
          <p className="switch-form">
                Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
