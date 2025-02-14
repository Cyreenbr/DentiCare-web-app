import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Appointments from "./pages/Appointments/appointments";
import Home from "./pages/Home/home";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;