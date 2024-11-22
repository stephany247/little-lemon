import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Homepage';
import Nav from './components/Nav'

function App() {
  return (
    <>
    <Router>
      <Nav /> {/* Use the Nav component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/reservations" element={<Reservations />} /> */}
        {/* <Route path="/order" element={<Order />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
