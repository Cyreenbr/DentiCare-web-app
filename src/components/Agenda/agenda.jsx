import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../agendaHeader/agendaHeader";
import AddAppointmentModal from "./AddAppointmentModal";
import "./agenda.css";
import AppointmentModal from "./AppointmentModel";
import PatientHistoryModal from "./PatientHistoryModal"; // Import PatientHistoryModal

const Agenda = () => {
  const [date, setDate] = useState(new Date());
  const [appointmentList, setAppointmentList] = useState([
    { id: 1, patientId: 1, patientName: "Sii", date: "2025-02-05", time: "10:00", details: "General consultation" },
    { id: 2, patientId: 1, patientName: "Sii", date: "2025-02-05", time: "14:00", details: "Post-operative checkup" },
    { id: 3, patientId: 2, patientName: "Boti", date: "2025-02-06", time: "16:00", details: "Dental consultation" },
    { id: 4, patientId: 3, patientName: "Chdoula", date: "2025-02-10", time: "16:00", details: "Dental consultation" },
    { id: 5, patientId: 4, patientName: "Rajj", date: "2025-02-11", time: "10:00", details: "General consultation" },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false); 
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);  // For Patient History Modal
  const [selectedPatientHistory, setSelectedPatientHistory] = useState(null); // Store the patient history

  const handleDateChange = (newDate) => setDate(newDate);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleDeleteAppointment = (id) => {
    setAppointmentList(appointmentList.filter((a) => a.id !== id));
    closeModal();
  };

  const handleModifyAppointment = (updatedAppointment) => {
    setAppointmentList(
      appointmentList.map((a) => (a.id === updatedAppointment.id ? updatedAppointment : a))
    );
  };

  const handleAddAppointment = (newAppointment) => {
    const newId = appointmentList.length + 1;
    setAppointmentList([...appointmentList, { id: newId, ...newAppointment }]);
    setAddModalOpen(false); 
  };

  // Function to get patient history
  const getPatientHistory = (patientId) => {
    const patientHistory = appointmentList.filter((appointment) => appointment.patientId === patientId);
    setSelectedPatientHistory(patientHistory);
    setHistoryModalOpen(true); // Open the Patient History modal
  };

  // Function to render appointments in the calendar
  const renderTileContent = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const dailyAppointments = appointmentList.filter((a) => a.date === formattedDate);

      return (
        <div className="appointments-container">
          {dailyAppointments.map((a) => (
            <div key={a.id} className="appointment" onClick={() => handleAppointmentClick(a)}>
              {a.time} - {a.patientName}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="agenda-container">
      <Header onAddAppointment={() => setAddModalOpen(true)} /> 
      <Calendar 
        value={date} 
        onChange={handleDateChange} 
        tileContent={renderTileContent} 
        locale="en-US" 
      />
      {selectedAppointment && (
        <AppointmentModal
          isOpen={isModalOpen}
          appointment={selectedAppointment}
          onClose={closeModal}
          onDelete={handleDeleteAppointment}
          onModify={handleModifyAppointment} 
          onMoreDetails={() => getPatientHistory(selectedAppointment.patientId)} // Pass the patientId for history
        />
      )}
      {isAddModalOpen && (
        <AddAppointmentModal
          isOpen={isAddModalOpen}
          onClose={() => setAddModalOpen(false)}
          onAdd={handleAddAppointment}
        />
      )}
      {isHistoryModalOpen && (
        <PatientHistoryModal
          isOpen={isHistoryModalOpen}
          onClose={() => setHistoryModalOpen(false)}
          patientName={selectedPatientHistory && selectedPatientHistory[0].patientName}
          patientHistory={selectedPatientHistory}
        />
      )}
    </div>
  );
};

export default Agenda;
