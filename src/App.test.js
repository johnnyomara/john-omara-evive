import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breakfast } from './components/breakfast';
import { Dinner } from './components/dinner';
import { Home } from './components/home';
import { Lunch } from './components/lunch';

test('Home renders select meal text', () => {
  render(<Home />);
  const linkElement = screen.getByText(/select meal/i);
  expect(linkElement).toBeInTheDocument();
});

test('Breakfast renders correct menu items', () => {
  render(<Breakfast />);
  const eggs = screen.getByText(/eggs/i);
  const toast = screen.getByText(/toast/i);
  const coffee = screen.getByText(/coffee/i);
  expect(eggs).toBeInTheDocument();
  expect(toast).toBeInTheDocument();
  expect(coffee).toBeInTheDocument();
});

test('Lunch renders correct menu items', () => {
  render(<Lunch />);
  const sandwich = screen.getByText(/sandwich/i);
  const chips = screen.getByText(/chips/i);
  const soda = screen.getByText(/soda/i);
  expect(sandwich).toBeInTheDocument();
  expect(chips).toBeInTheDocument();
  expect(soda).toBeInTheDocument();
});

test('Dinner renders correct menu items', () => {
  render(<Dinner />);
  const steak = screen.getByText(/steak/i);
  const potatoes = screen.getByText(/potatoes/i);
  const wine = screen.getByText(/wine/i);
  const cake = screen.getByText(/cake/i);
  expect(steak).toBeInTheDocument();
  expect(potatoes).toBeInTheDocument();
  expect(wine).toBeInTheDocument();
  expect(cake).toBeInTheDocument();
});

// I ran into some issues testing here because alerts are a bit tricky to inspect.
// As I mentioned in home.js, I'd have done this differently if this were a
// real app that would be used by anyone, so this testing would be more effective.
// I would test to ensure that each order created displays the correct error, or order
// information.
test('submitting a meal should render alert',  () => {
  render(<Home />);
  const alertMock = jest.spyOn(window,'alert').mockImplementation();
  userEvent.click(screen.getByText('Breakfast'))
  userEvent.click(screen.getByText('Place Order'))
  expect(alertMock).toHaveBeenCalledTimes(1)
});
