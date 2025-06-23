
import { render, screen } from "@testing-library/react";
import RestaurantCard , {promotedRestaurant} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";


const PromotedRestaurantCard = promotedRestaurant(RestaurantCard);

it ("should render restaurand card componenet with props data", ()=>{
  render (<RestaurantCard resData = {MOCK_DATA} />);

  const name = screen.getByText("Theobroma");
  expect (name).toBeInTheDocument();
});



