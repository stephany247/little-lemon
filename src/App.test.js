import { render, screen } from '@testing-library/react';
import Main, {timesReducer, initializeTimes} from './components/Main';

test('Renders the BookingForm Submit Button', () => {
    render(<Main />);
    const buttonElement = screen.getByText("Make Your Reservation");
    expect(buttonElement).toBeInTheDocument();
})


describe('initializeTimes function', () => {
  it('should return the correct initial state for availableTimes', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual({
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    });
  });
});

describe('updateTimes function', () => {
  it('should return the same value as the provided state', () => {
    const currentState = {
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };

    // Simulate the action to update times
    const action = { type: 'UPDATE_TIMES' };

    // Call the reducer with the current state and action
    const newState = timesReducer(currentState, action);

    // Check that the state returned by the reducer is the same as the provided state
    expect(newState).toEqual(currentState);
  });
});
