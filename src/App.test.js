
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from "react"
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

test('generating password', () => {
  render(<App />)
  userEvent.type(screen.getByPlaceholderText("chocolat"), "premier")
  expect(screen.getByPlaceholderText("chocolat")).toHaveValue("premier")
  userEvent.type(screen.getByPlaceholderText("noir"), "second")
  expect(screen.getByPlaceholderText("noir")).toHaveValue("second")
  fireEvent.click(screen.getByText(/Create password/i))
  const Password = screen.getByTitle("password")
  expect(Password).toBeInTheDocument()
  const regex1 = new RegExp("premier", "i")
  expect(regex1.test(Password.textContent)).toBe(true)
  const regex2 = new RegExp("second", "i")
  expect(regex2.test(Password.textContent)).toBe(true)
})
