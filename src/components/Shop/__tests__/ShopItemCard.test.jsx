import "@testing-library/jest-dom/vitest";
import mockShopItems from "./mock-shop-items";
import ShopItemCard from "../ItemCard/ItemCard";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useOutletContext } from "react-router";
import userEvent from "@testing-library/user-event";

vi.mock("react-router", async (importOriginal) => {
  const originalModule = await importOriginal();

  return {
    ...originalModule,
    useOutletContext: vi.fn(),
  };
});

const placeholderFunction = vi.fn();

describe("ShopItemCard test suite", () => {
  it("Should display an item with title, price, and desc", () => {
    useOutletContext.mockReturnValue([[], placeholderFunction]);

    render(<ShopItemCard item={mockShopItems[0]} />);
    expect(screen.getByText("Toy train")).toBeInTheDocument();
    expect(screen.getByText("£10")).toBeInTheDocument();
    expect(
      screen.getByText("1:8 scale model with working wheels.")
    ).toBeInTheDocument();
  });

  it("Should increase the quantity when clicking the increment button", async () => {
    render(<ShopItemCard item={mockShopItems[0]} />);
    await userEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("quantity_input")).toHaveValue("1");
  });

  it("Should decrease the quantity when clicking the decrement button", async () => {
    render(<ShopItemCard item={mockShopItems[0]} />);
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("-"));
    expect(screen.getByTestId("quantity_input")).toHaveValue("1");
  });

  it("Should change the quantity when manually inputting a value", async () => {
    render(<ShopItemCard item={mockShopItems[0]} />);
    await userEvent.type(screen.getByTestId("quantity_input"), "100");

    expect(screen.getByTestId("quantity_input")).toHaveValue("100");
  });
});
