import React, { useState } from "react";
import "./AppointmentModal.css";

const AppointmentModal = ({ isOpen, appointment, onClose, onDelete, onModify, onMoreDetails }) => {
  if (!isOpen || !appointment) return null;

  // État local pour modifier l'entrée du rendez-vous
  const [editedAppointment, setEditedAppointment] = useState({ ...appointment });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAppointment({ ...editedAppointment, [name]: value });
  };

  const handleSubmit = () => {
    onModify(editedAppointment);
    setIsEditing(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>

        <h3 style={{ textAlign: "center" }}>Appointment Details</h3>

        {isEditing ? (
          <div>
            <label>Patient:</label>
            <input type="text" name="patientName" value={editedAppointment.patientName} onChange={handleChange} />

            <label>Date:</label>
            <input type="date" name="date" value={editedAppointment.date} onChange={handleChange} />

            <label>Time:</label>
            <input type="time" name="time" value={editedAppointment.time} onChange={handleChange} />

            <label>Details:</label>
            <textarea name="details" value={editedAppointment.details} onChange={handleChange} />

            <button className="btn save" onClick={handleSubmit}>Save</button>
          </div>
        ) : (
          <div>
            <p><strong>Patient:</strong> {appointment.patientName}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <p><strong>Details:</strong> {appointment.details}</p>
          </div>
        )}

        <div className="modal-actions">
          {isEditing ? null : <button className="btn modify" onClick={() => setIsEditing(true)}>Modify</button>}
          <button className="btn delete" onClick={() => onDelete(appointment.id)}>Delete</button>
          <button className="btn details" onClick={onMoreDetails}>Patient Details</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
