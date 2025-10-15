import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Basket from "../Basket.jsx";
import {
  mockBasketItems,
  mockShopItems,
  expectedSubtotal,
} from "./mock-data.js";
import { useOutletContext } from "react-router";

vi.mock("react-router", async (importOriginal) => {
  const originalModule = await importOriginal();

  return {
    ...originalModule,
    useOutletContext: vi.fn(),
  };
});

vi.mock("../BasketItemCard/BasketItemCard", () => ({
  default: ({ item }) => <div data-testid="basket-item">{item.title}</div>,
}));

describe("Basket Component Rendering and Calculations", () => {
  const mockSetBasketItems = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    useOutletContext.mockReturnValue([
      mockBasketItems,
      mockSetBasketItems,
      mockShopItems,
    ]);
  });

  it("should display an empty basket with subtotal of £0.00", () => {
    useOutletContext.mockReturnValueOnce([
      [],
      mockSetBasketItems,
      mockShopItems,
    ]);

    render(<Basket />);
    expect(screen.getByText("Subtotal: £0.00")).toBeInTheDocument();
  });

  it("should display 3 items in the basket with a subtotal of £100.00", () => {
    render(<Basket />);
    expect(screen.getByText("Toy train")).toBeInTheDocument();
    expect(screen.getByText("Cricket bat")).toBeInTheDocument();
    expect(screen.getByText("£20 TKWill Gift Card")).toBeInTheDocument();
    expect(screen.getAllByTestId("basket-item").length).toBe(3);
    expect(
      screen.getByText(`Subtotal: £${expectedSubtotal}`)
    ).toBeInTheDocument();
  });
});
