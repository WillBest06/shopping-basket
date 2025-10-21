import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../Home";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/vitest";

describe("Home test suite", () => {
  it("Should display a welcome message and have a link to the shop", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Welcome to TKWill!")).toBeInTheDocument();
    expect(screen.getByTestId("image_carousel")).toBeInTheDocument();
    expect(screen.getByText("Autumn comforts are calling")).toBeInTheDocument();
    expect(screen.getByRole("link", { href: "/shop" })).toBeInTheDocument();
  });
});
