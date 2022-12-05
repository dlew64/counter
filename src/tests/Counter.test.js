import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const intial_val = screen.getByTestId("count");
  expect(intial_val).toHaveTextContent(0);
  
});

test('clicking + increments the count', () => {
  const intial_val = screen.getByTestId("count");
  userEvent.click(screen.getByText('+'));
  expect(intial_val).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  const intial_val = screen.getByTestId("count");
  userEvent.click(screen.getByText('-'));
  expect(intial_val).toHaveTextContent(-1);
});
