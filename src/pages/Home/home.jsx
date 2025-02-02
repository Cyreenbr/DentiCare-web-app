import React from "react";
import { FaHome, FaCalendarAlt, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; 
import "./Home.css"; 
import Sidebar from "../../components/Sidebar/Sidebar";


function Home() {

  return (
    <div className="home-container">
      {/* Sidebar */}
       <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        <h1>Dashboard</h1>
        <p>Welcome to your dental management system.</p>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default Home;