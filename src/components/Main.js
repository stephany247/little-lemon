import { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../scripts/Api";
import { useNavigate } from "react-router-dom"; 

export function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {
        ...state,
        availableTimes: fetchAPI(new Date(action.date)), // Use fetchAPI to get times
      };
    default:
      return state;
  }
}

// Initialize available times state
export function initializeTimes() {
  const today = new Date();
  return {
    availableTimes: fetchAPI(today), // Fetch available times for today
  };
}

function Main() {
  // Initialize the reducer
  const [state, dispatch] = useReducer(timesReducer, initializeTimes);
  const navigate = useNavigate();


  const [selectedDate, setSelectedDate] = useState("");
  // Function to handle date change and dispatch available times update
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    dispatch({ type: "UPDATE_TIMES", date: new Date(date) });
  };

  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  // Save bookings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const submitForm = (formData) => {
    if (!isSlotBooked(formData.date, formData.time)) {
      const updatedBookings = [...bookings, formData];
      setBookings(updatedBookings);
      const success = submitAPI(formData);
      if (success) navigate("/confirmed");
    } else {
      alert("This slot is already booked!");
    }
  };

  const isSlotBooked = (date, time) => {
    try {
      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];
      console.log("Bookings in localStorage:", existingBookings);

      if (!Array.isArray(existingBookings)) {
        console.log("Bookings data is not an array:", existingBookings);
        return false;
      }

      return existingBookings.some(
        (booking) => booking.date === date && booking.time === time
      );
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return false;
    }
  };

  return (
    <BookingForm
      availableTimes={state.availableTimes}
      onDateChange={handleDateChange}
      // onSubmit={submitForm}
      submitForm={submitForm}
      // bookings={bookings}
      selectedDate={selectedDate}
    />
  );
}
export default Main;

window.onload = function () {
  // Check if the fetchAPI function is available
  if (typeof fetchAPI === "function") {
    console.log("fetchAPI is loaded!");
  } else {
    console.error("fetchAPI is not loaded correctly.");
  }
};
