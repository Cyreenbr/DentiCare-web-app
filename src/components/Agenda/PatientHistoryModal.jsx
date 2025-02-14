import React from "react";

const PatientHistoryModal = ({ isOpen, onClose, patientName, patientHistory }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>History of {patientName} appointments</h3>
        
        {patientHistory && patientHistory.length > 0 ? (
          <ul>
            {patientHistory.map((appointment) => (
              <li key={appointment.id}>
                {appointment.date} - {appointment.time} - {appointment.details}
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments found for this patient.</p>
        )}
      </div>
    </div>
  );
};

export default PatientHistoryModal;
