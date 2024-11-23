import { useState } from "react";

function BookingForm({ availableTimes, onDateChange }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onDateChange(e);
  };
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    alert(
      `Reservation Details:\nDate: ${date || "Not selected"}\nTime: ${time || "Not selected"}\nGuests: ${guests}\nOccasion: ${occasion}`
    );
  };

  return (
    <form
    style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
      {availableTimes.length === 0 ? (
          <option value="">No available times</option>
        ) : (
          availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))
        )}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your Reservation"
      />
    </form>
  );
}

export default BookingForm;
