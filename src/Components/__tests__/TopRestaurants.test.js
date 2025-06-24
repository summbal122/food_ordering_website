import { render, screen, fireEvent, act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResLisData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should",  async () => {
  await act(async () => {  
    render 
    (
     <Provider store={appStore} >
       <BrowserRouter>
       <Body/>
    </BrowserRouter>
      </Provider>
  )   
}
)
  const topRestaurants= screen.getByTestId("filterTopRestaurants");
  expect(topRestaurants).toBeInTheDocument();

  fireEvent.click(topRestaurants);
  const resCard = screen.getAllByTestId("resCard");
  expect((resCard).length).toBe(3);
});
