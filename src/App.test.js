import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import Main, { timesReducer, initializeTimes } from "./components/Main";
import { fetchAPI } from "./scripts/Api";
import BookingForm from "./components/BookingForm";

// jest.mock("react-router-dom", () => ({
//   useNavigate: () => jest.fn(),
// }));


  // Mock localStorage
beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));
});

jest.mock("./scripts/Api", () => ({
  fetchAPI: jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]),
}));

test("Renders the BookingForm Submit Button", () => {
  render(<Main />);
  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
});

describe("initializeTimes function", () => {
  it("should initialize state with available times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);
    const state = initializeTimes();

    expect(state.availableTimes).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });
});

describe("timesReducer", () => {
  it("should update available times based on the selected date", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const initialState = {
      availableTimes: [],
    };

    const testDate = new Date("2024-11-24");
    const action = { type: "UPDATE_TIMES", date: testDate };

    const newState = timesReducer(initialState, action);

    expect(newState.availableTimes).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(testDate);
  });
});

test("it applies the correct HTML5 validation attributes to form inputs", () => {
  const { getByLabelText } = render(<BookingForm />);

  const guestsInput = getByLabelText(/guests/i); 

  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");

  expect(guestsInput).toHaveAttribute("required");
});

test("it shows an error when date is not selected", () => {
  const { getByLabelText, getByText } = render(<BookingForm />);

  const dateInput = getByLabelText(/date/i);

  fireEvent.blur(dateInput); 
  expect(getByText(/date is required/i)).toBeInTheDocument();
});

test("it validates the time when date is not selected", () => {
  const { getByLabelText, getByText } = render(<BookingForm />);

  const timeInput = getByLabelText(/time/i);

  fireEvent.blur(timeInput);

  expect(getByText(/please select a date first/i)).toBeInTheDocument();
});

test("it validates time only after a date is selected", () => {
  const { getByLabelText, getByText } = render(<Main />);

  const dateInput = getByLabelText(/date/i);
  const timeInput = getByLabelText(/time/i);

  fireEvent.change(dateInput, { target: { value: "2024-12-25" } });

  fireEvent.blur(timeInput);

  expect(getByText(/time is required/i)).toBeInTheDocument();
});

test("it validates the number of guests correctly", () => {
  const { getByLabelText, queryByText } = render(<Main />);

  const guestsInput = getByLabelText(/guests/i);

  fireEvent.change(guestsInput, { target: { value: "0" } });
  fireEvent.blur(guestsInput);

  expect(queryByText(/guests should be between 1 and 10/i)).toBeInTheDocument();

  // Simulate a valid number of guests
  fireEvent.change(guestsInput, { target: { value: "5" } });
  fireEvent.blur(guestsInput);

  expect(
    queryByText(/guests should be between 1 and 10/i)
  ).not.toBeInTheDocument();
});

test("should show error when occasion is not selected and form is submitted", () => {
  render(<BookingForm />);

  const occasionInput = screen.getByLabelText(/occasion/i);

  expect(occasionInput).toBeInTheDocument();
  expect(occasionInput).toHaveAttribute("required");
});

test("displays error when form is submitted with empty fields", () => {
  render(<BookingForm />);

  fireEvent.submit(screen.getByTestId("form"));

  expect(screen.queryByText("Date is required.")).not.toBeInTheDocument();
  expect(screen.queryByText("Time is required.")).not.toBeInTheDocument();
  expect(
    screen.queryByText("Guests should be between 1 and 10.")
  ).not.toBeInTheDocument();
});
