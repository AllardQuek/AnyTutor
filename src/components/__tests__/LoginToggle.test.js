import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adding here to remove linting errors
import { BrowserRouter as Router } from "react-router-dom";

import LoginToggle from "../LoginToggle";

test("Renders sign up call to action", () => {
  render(
    // Link can only be used within Router
    <Router>
      <LoginToggle hasAccount={true} />
    </Router>
  );

  const ctaElement = screen.getByText("Sign up");
  expect(ctaElement).toBeInTheDocument();
});

test("Renders login call to action", () => {
  render(
    // Link can only be used within Router
    <Router>
      <LoginToggle hasAccount={false} />
    </Router>
  );

  const ctaElement = screen.getByText("Log in");
  expect(ctaElement).toBeInTheDocument();
});
