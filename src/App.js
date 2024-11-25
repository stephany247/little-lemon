import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Homepage';
import Nav from './components/Nav'
import Main from './components/Main';
import ConfirmedBooking from "./components/ConfirmedBooking"; // The new confirmation component


function App() {
  return (
    <>
    <Router>
      <Nav /> {/* Use the Nav component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/reservations" element={<Main />} />
        {/* <Route path="/order" element={<Order />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
