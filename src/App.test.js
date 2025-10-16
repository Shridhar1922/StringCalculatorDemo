import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the String Calculator heading", () => {
  render(<App />);
  
  const headingElement = screen.getByText(/String Calculator/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders Calculate button", () => {
  render(<App />);
  
  const button = screen.getByRole("button", { name: /calculate/i });
  expect(button).toBeInTheDocument();
});

test("renders input field", () => {
  render(<App />);
  
  const input = screen.getByPlaceholderText(/enter numbers/i);
  expect(input).toBeInTheDocument();
});
