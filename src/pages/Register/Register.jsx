import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Import icons
import "./Register.css"; 
import logo from "../../assets/logo.png"; 

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Add logic to handle registration (e.g., API call)
  };

  return (
    <div className="signin-container">
      {/* Left Section: Welcome Message with Logo */}
      <div className="welcome-section">
        <img src={logo} alt="DentiCare Logo" className="logo" />
        <p>Your Smart Dental Assistant</p>
        <a href="/read-more">Read More</a>
      </div>

      {/* Right Section: Registration Form */}
      <div className="form-section">
        <h2>Hello!</h2>
        <p>Sign Up to Get Started</p>

        <form onSubmit={handleSubmit} className="signin-form">
          {/* Full Name Field */}
          <div className="input-group">
            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Sign Up Button */}
          <button type="submit" className="login-button">
            Sign Up
          </button>

          {/* Link to Sign In */}
          <p className="switch-form">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;