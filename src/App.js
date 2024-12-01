import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Homepage";
import About from "./components/Pages/AboutPage";
import Menu from "./components/Pages/MenuPage";
import Order from "./components/Pages/OrderPages";
import Login from "./components/Pages/LoginPage";
import BookingPage from './components/Pages/booking/BookingPage'
import ConfirmedBooking from "./components/Pages/booking/ConfirmedBooking";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
