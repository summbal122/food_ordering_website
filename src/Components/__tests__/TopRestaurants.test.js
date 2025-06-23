import { render, screen, fireEvent, act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResLisData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should",  async () => {
  await act(async () => {  
    render 
    (<BrowserRouter>
    <Body/>
    </BrowserRouter>)   
}
)
  const topRestaurants= screen.getByTestId("filterTopRestaurants");
  expect(topRestaurants).toBeInTheDocument();

  fireEvent.click(topRestaurants);
  const resCard = screen.getAllByTestId("resCard");
  expect((resCard).length).toBe(5);

});
