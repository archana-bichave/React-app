import RestoCard from "../components/RestoCard";
import { render, screen } from "@testing-library/react";
import  RestoItem  from "../mock/RestoCardMock";
import "@testing-library/jest-dom";

describe("Restaurant card features", () => {
  it("check if card is loaded", () => {
    render(<RestoCard resData={RestoItem} />);
    const restoName = screen.getByText("KFC");
    expect(restoName).toBeInTheDocument();
  });
});
