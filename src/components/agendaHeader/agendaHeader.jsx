import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import './agendaHeader.css';

function Header({ onAddAppointment }) {
  return (
    <div className="header">
      <h1>Agenda</h1>
      <div className="header-actions">
        <button>
          <i className="fas fa-bell"></i>
        </button>
        <button>
          <i className="fas fa-sync-alt"></i>
        </button>
        <button>
          <i className="fas fa-print"></i>
        </button>
        <button>
          <i className="fas fa-filter"></i> Filters
        </button>
        <button className="add-appointment" onClick={onAddAppointment}>
          <i className="fas fa-plus"></i> Add Appointment
        </button>
      </div>
    </div>
  );
}

export default Header;
