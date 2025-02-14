import React, { useState } from "react";
import "./AppointmentModal.css";

const AddAppointmentModal = ({ isOpen, onClose, onAdd }) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !date || !time) return;

    onAdd({ patientName, date, time, details });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Add Appointment</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          <textarea placeholder="Details (optional)" value={details} onChange={(e) => setDetails(e.target.value)} />
          <button type="submit" className="btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddAppointmentModal;
