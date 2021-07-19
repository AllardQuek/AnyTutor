import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adding here to remove linting errors

import CustomButton from "../CustomButton";

test("Renders button with text", () => {
  render(<CustomButton text="Hello" />);
  const headerElement = screen.getByText("Hello");
  expect(headerElement).toBeInTheDocument();
});
