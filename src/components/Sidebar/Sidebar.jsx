import React from "react";
import { FaHome, FaCalendarAlt, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; 
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
     <div className="sidebar">
        {/* User Info Section */}
        <div className="user-info">
          <h2>Welcome!</h2>
          <p>Dr. Nesrine Berrbibe</p>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/home" className="nav-link">
                <FaHome className="nav-icon" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/appointments" className="nav-link">
                <FaCalendarAlt className="nav-icon" />
                <span>Appointments</span>
              </a>
            </li>
            <li>
              <a href="/patients" className="nav-link">
                <FaUser className="nav-icon" />
                <span>Patients</span>
              </a>
            </li>
            <li>
              <a href="/settings" className="nav-link">
                <FaCog className="nav-icon" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="logout">
          <a href="/logout" className="nav-link">
            <FaSignOutAlt className="nav-icon" />
            <span>Logout</span>
          </a>
        </div>
      </div>
  );
}

export default Sidebar;