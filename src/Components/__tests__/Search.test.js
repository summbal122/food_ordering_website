import { render, screen, fireEvent, act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResLisData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";


// fake api call
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
       Promise.resolve(MOCK_DATA),
  })
);

it("should search restaurants with name Burger" , async () => {
  await act(async () => {
    render(
      <Provider store={appStore} >
      <BrowserRouter>
          <Body />
      </BrowserRouter>
     </Provider>
    );

  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Burger" } });
  fireEvent.click(searchButton);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1); 
});




