import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { useOutletContext } from "react-router";
import mockShopItems from "./mock-shop-items";
import Shop from "../Shop";

vi.mock("react-router", async (importOriginal) => {
  const originalModule = await importOriginal();

  return {
    ...originalModule,
    useOutletContext: vi.fn(),
  };
});

const placeholderFunction = vi.fn();

vi.mock("./ItemCard/ItemCard", () => ({
  default: ({ item }) => (
    <div>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
    </div>
  ),
}));

describe("Shop test suite", () => {
  it("Should display no items found", () => {
    useOutletContext.mockReturnValue([[], placeholderFunction, []]);
    render(<Shop />);
    expect(screen.getByText("No items found")).toBeInTheDocument();
  });

  it("Should display shop items", () => {
    useOutletContext.mockReturnValue([[], placeholderFunction, mockShopItems]);
    render(<Shop />);
    expect(screen.getByText("Toy train")).toBeInTheDocument();
    expect(screen.getByText("£10")).toBeInTheDocument();
    expect(screen.getByText("Cricket bat")).toBeInTheDocument();
    expect(screen.getByText("£50")).toBeInTheDocument();
    expect(screen.getByText("£20 TKWill Gift Card")).toBeInTheDocument();
    expect(screen.getByText("£20")).toBeInTheDocument();
  });
});
