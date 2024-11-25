import { render, screen } from '@testing-library/react';
import Main, {timesReducer, initializeTimes} from './components/Main';
import { fetchAPI } from './scripts/Api';

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));


jest.mock("./scripts/Api", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
}));

test('Renders the BookingForm Submit Button', () => {
    render(<Main />);
    const buttonElement = screen.getByText("Make Your Reservation");
    expect(buttonElement).toBeInTheDocument();
})


describe('initializeTimes function', () => {
  it('should initialize state with available times from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes); 
    const state = initializeTimes();

    expect(state.availableTimes).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });
});

describe('timesReducer', () => {
  it('should update available times based on the selected date', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const initialState = {
      availableTimes: [],
    };

    const testDate = new Date('2024-11-24'); 
    const action = { type: 'UPDATE_TIMES', date: testDate };

    const newState = timesReducer(initialState, action);

    expect(newState.availableTimes).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(testDate); 
  });
});
