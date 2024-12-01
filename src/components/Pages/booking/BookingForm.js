import { useCallback, useEffect, useState } from "react";

function BookingForm({
  availableTimes,
  onDateChange,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
  });
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
  });

  const validateForm = useCallback(() => {
    const newErrors = {};

    // Date validation
    if (!date) {
      newErrors.date = "Date is required.";
    }

    // Time validation
    if (!time && date) {
      newErrors.time = "Time is required.";
    } else if (!time && !date) {
      newErrors.time = "Please select a date first to view available times.";
    }

    // Guests validation
    if (guests < 1 || guests > 10) {
      newErrors.guests = "Guests should be between 1 and 10.";
    }

    setErrors(newErrors);

    // Form validity check
    const isValid = Object.values(newErrors).every((error) => error === "");
    setIsFormValid(isValid);
  }, [date, time, guests]);

  useEffect(() => {
    validateForm();
  }, [date, time, guests, validateForm]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onDateChange(e);
    setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, time: "" }));
  };
  const handleOccasionChange = (e) => setOccasion(e.target.value);
  const handleGuestsChange = (e) => {
    const value = e.target.value;
    if (value < 1) {
      e.target.setCustomValidity("Guests must be at least 1.");
    } else if (value > 10) {
      e.target.setCustomValidity("Guests cannot exceed 10.");
    } else {
      e.target.setCustomValidity("");
    }
    setGuests(value);
    e.target.reportValidity();
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [id.replace("res-", "")]: true,
    }));

    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    if (isFormValid) {
      submitForm(formData);
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };


  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <div className="input-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          onBlur={handleBlur}
          min={new Date().toISOString().split("T")[0]}
          required
        />
        {touched.date && errors.date && (
          <p style={{ color: "red" }}>{errors.date}</p>
        )}
      </div>

      <div className="input-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={handleTimeChange}
          onBlur={handleBlur}
          required
        >
          <option value="" disabled>
            Select a time
          </option>
          {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <option
                key={index}
                value={time}
              >
                {time}
              </option>
            ))
          ) : (
            <option disabled>No available times</option>
          )}
        </select>
        {touched.time && errors.time && (
          <p style={{ color: "red" }}>{errors.time}</p>
        )}
      </div>

      <div className="input-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          onBlur={handleBlur}
          required
        />
        {touched.guests && errors.guests && (
          <p style={{ color: "red" }}>{errors.guests}</p>
        )}
      </div>

      <div className="input-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
          required
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && <p style={{ color: "red" }}>{errors.occasion}</p>}
      </div>

      <button
        className="button-primary submit-btn"
        type="submit"
        value="Make Your Reservation"
        aria-label="Make your reservation"
        disabled={!isFormValid}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
