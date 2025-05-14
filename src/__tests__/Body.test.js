import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mock/RestoListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("tests features on home screen", () => {
  it("should filter restaurants based on search query", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const searchInput = screen.getByTestId("searchBox");
    fireEvent.change(searchInput, {target: {value: 'Hutt'}});
    expect(searchInput.value).toBe('Hutt');
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(20);
    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurant"});
    fireEvent.click(topRatedButton);
    const topRatedResto = screen.getAllByTestId("resCard");
    expect(topRatedResto.length).toBe(10);
  });
});
