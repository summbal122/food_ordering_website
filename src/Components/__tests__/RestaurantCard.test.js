
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";


it ("should render restaurand card componenet with props data", ()=>{
  render (
    <Provider store={appStore}>
      <BrowserRouter>
      <RestaurantCard resData = {MOCK_DATA} />
      </BrowserRouter>
       </Provider>

);

  const name = screen.getByText("Theobroma");
  expect (name).toBeInTheDocument();
});



