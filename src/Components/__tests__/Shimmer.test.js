import { Shimmer } from "../Shimmer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router"; // fix here too if needed

it("should render shimmer effect", () => {
  render(
    <BrowserRouter>
      <Shimmer />
    </BrowserRouter>
  );

  const shimmerElements = screen.getAllByTestId("Shimmer");
  expect(shimmerElements.length).toBeGreaterThan(0);
});
