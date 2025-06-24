jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useOutletContext: () => ({
    showCart: true,
    setShowCart: jest.fn(),
  }),
}));

import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { addItem } from "../../utils/cartSlice";

test("renders Cart component with empty cart message", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});

test("renders Cart with one item", () => {
  // Add item to store before rendering
  appStore.dispatch(
    addItem({
      id: "123",
      name: "Burger",
      price: 200,
      quantity: 1,
      imageId: "img123",
    })
  );

  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText(/burger/i)).toBeInTheDocument();
  expect(screen.getByText("$2.00 × 1 = $2.00")).toBeInTheDocument();
});
