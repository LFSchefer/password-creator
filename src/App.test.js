
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from "react"
import { act } from 'react-test-renderer';
import userEvent from '@testing-library/user-event';



test('renders', () => {
  render(<App />);
  const PasswordBtn = screen.getByText(/Create password/i);
  expect(PasswordBtn).toBeInTheDocument();
});

test('select algo', () => {
  render(<App />);
  const RandomBtn = screen.getByText(/Random word/i);
  fireEvent.click(RandomBtn)
  expect(RandomBtn).toHaveClass("btn selected")
});

test('good number of digits and special char', () => {
  render(<App />)
  const element = screen.getByTestId("nDigits")
  userEvent.selectOptions(
    )
    screen.getAllByRole("option", {value: 2})

})
