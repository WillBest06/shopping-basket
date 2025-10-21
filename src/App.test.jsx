import { describe, it, expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

const mockItem = {
  id: 1,
  title: "Toy train",
  price: 10.0,
  image: "train.jpg",
  description: "1:8 scale model with working wheels.",
};

describe("App test suit", () => {
  it("Should display a navbar with 3 links to different pages and an empty basket indicator", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Basket")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Should update the basket indicator to 1 when adding an item to basket", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <App />
      </MemoryRouter>
    );

    userEvent.click(screen.getByText("Add to basket"));

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
