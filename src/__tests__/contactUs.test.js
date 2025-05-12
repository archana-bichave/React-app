import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should display a contact us form", () => {
  render(<ContactUs />);
  const heading = screen.getByText("Contact Us");
  expect(heading).toBeInTheDocument();
});

test("should display a send message button ", () => {
render(<ContactUs/>);
const button = screen.getByRole("button");
expect(button).toBeInTheDocument();
});
