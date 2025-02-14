import React from "react";
import Agenda from "../../components/Agenda/agenda.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import "./appointments.css";
const Appointments = () => {
  return (
<div className="page-container">
      <Sidebar /> {/* Sidebar prend toute la hauteur */}
      <div className="content">
        <Agenda />
      </div>
    </div>
  );
};
export default Appointments;