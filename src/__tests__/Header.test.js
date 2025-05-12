import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header features", () => {
test("should display a contact us form", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const headerLinks = screen.getAllByRole("listitem");
  expect(headerLinks.length).toBe(4);
});
})

