import { Shimmer } from "../Shimmer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom"; // fix here too if needed

it("should render shimmer effect", () => {
  render(
    <BrowserRouter>
      <Shimmer />
    </BrowserRouter>
  );

  const shimmerElements = screen.getAllByTestId("shimmer");
  expect(shimmerElements.length).toBeGreaterThan(0);
});
