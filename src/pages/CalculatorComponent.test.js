import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator Component", () => {
  test("renders input and button", () => {
    render(<Calculator />);
    expect(screen.getByPlaceholderText("Enter numbers")).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  test("displays sum when valid input is entered", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1,2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Sum: 6")).toBeInTheDocument();
  });

  test("shows error message for negative numbers", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1,-2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText(/negative numbers not allowed/i)).toBeInTheDocument();
  });
});
