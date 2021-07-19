import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adding here to remove linting errors

import AboutInfo from "../AboutInfo";

test("Renders info header", () => {
  render(<AboutInfo />);
  const headerElement = screen.getByText("Hi there.");
  expect(headerElement).toBeInTheDocument();
});
