
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

//for the higher order function
it ("should render promoted card componenet with promoted label", () => {
     render (<PromotedRestaurantCard resData = {MOCK_DATA}/>);

     const heading = screen.getByText("Promoted");
     expect(heading).toBeInTheDocument();
} )

it ("should render promoted componenet with img", () => {
     render (<PromotedRestaurantCard resData = {MOCK_DATA}/>);

     const img = screen.getByRole("img");
     expect(img).toBeInTheDocument();
} )


