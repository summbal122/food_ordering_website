
import {  fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";


test("should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should render Header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/caRt/i);
  expect(cartItem).toBeInTheDocument();
});

test("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", {name: "login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name:"logout"});
  expect(logoutButton).toBeInTheDocument();
});


