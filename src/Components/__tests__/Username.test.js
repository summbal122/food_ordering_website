import { BrowserRouter } from "react-router";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResLisData.json";
import "@testing-library/jest-dom";
import { act } from "react";
import UserContext from "../../utils/UserContext";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { useState } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render online status and update username", async () => {
  // Create a wrapper component that manages the loggedInUser state for the test
  const Wrapper = () => {
    const [loggedInUser, setUserName] = useState("test-user");

    return (
      <BrowserRouter>
        <UserContext.Provider value={{ loggedInUser, setUserName }}>
          <Provider store={appStore}>
            <>
              <Body />
              <Header />
            </>
          </Provider>
        </UserContext.Provider>
      </BrowserRouter>
    );
  };

  await act(async () => {
    render(<Wrapper />);
  });

  // Get the username input and check it exists
  const usernameInput = screen.getByTestId("usernameInput");
  expect(usernameInput).toBeInTheDocument();

  // Change the username input value
  fireEvent.change(usernameInput, { target: { value: "Sumbals" } });

  // Now check if Header updated the displayed username
  const headerUsername = screen.getByTestId("headerInput");
  expect(headerUsername).toHaveTextContent("Sumbals");
});
