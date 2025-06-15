
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import Header from "../Header"
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import Cart from "../Cart"


 global.fetch=jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA) 
  })
 )

it ("should load restaurant menu component", async () => {
  await act( async () => {
    render (
      <Provider store= {appStore}>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        <Cart />
        <RestaurantMenu/> 
      </Provider>   
    )
  });

  const accordionHeader = screen.getByText("Classic Bowls (10)");
  fireEvent.click(accordionHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect (foodItems.length).toBe(10);

  const addButtons =screen.getAllByRole("button", {name : "Add +"});
  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[3]);

  expect(screen.getByText("Cart - 2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(12);
  fireEvent.click(screen.getByRole("button", {name: "Clear"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(10);

});