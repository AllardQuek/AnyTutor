import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adding here to remove linting errors

import Disclaimers from "../Disclaimers";

test("Renders button with text", () => {
  render(<Disclaimers />);
  const emailElement = screen.getByTestId("email");
  // Check if emailElement contains the correct text
  expect(emailElement.textContent).toBe("anytutor.official@gmail.com");
});
