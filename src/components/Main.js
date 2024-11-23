import { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

export function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {
        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      };
    default:
      return state;
  }
}

// Initialize available times state
export function initializeTimes() {
  return {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
}

function Main() {
  //   const [availableTimes, setAvailableTimes] = useState([
  //     "17:00",
  //     "18:00",
  //     "19:00",
  //     "20:00",
  //     "21:00",
  //     "22:00",
  //   ]);

  // Initialize the reducer
  const [state, dispatch] = useReducer(
    timesReducer,
    undefined,
    initializeTimes
  );

  // Function to handle date change and dispatch available times update
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    // Dispatch the updateTimes action when the date changes
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  return (
    <>
      <BookingForm
        availableTimes={state.availableTimes}
        // setAvailableTimes={setAvailableTimes}
        onDateChange={handleDateChange}
      />
    </>
  );
}
export default Main;
