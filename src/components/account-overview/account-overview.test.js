import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

test('Account Overview should show even without data', () => {
  render(<AccountOverview />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});

test('Support card should disappear without data', () => {
  render(<AccountOverview />);
  const element = screen.queryByText(/Support/i);
  expect(element).toBeNull();
});

test('Sales title should show even with data', () => {
  render(<AccountOverview />);
  const element = screen.getByText(/Sales/i);
  expect(element).toBeInTheDocument();
});