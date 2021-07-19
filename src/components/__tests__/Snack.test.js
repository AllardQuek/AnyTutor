import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adding here to remove linting errors

import Snack from "../Snack";

test("Renders snack with text", () => {
  render(<Snack message="Testing snack" />);
  const snackElement = screen.getByText("Testing snack");
  expect(snackElement).toBeInTheDocument();
});
