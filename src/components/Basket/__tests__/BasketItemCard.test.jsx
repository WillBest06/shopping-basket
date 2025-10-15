import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import BasketItemCard from "../BasketItemCard/BasketItemCard";
import userEvent from "@testing-library/user-event";

const item = {
  id: 1,
  title: "Toy train",
  price: 10.0,
  image: "train.jpg",
  quantity: 2,
};

const mockHandleQuantityChange = vi.fn();
const mockHandleDelete = vi.fn();

describe("BasketItemCard Test Suite", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    render(
      <BasketItemCard
        item={item}
        handleQuantityChange={mockHandleQuantityChange}
        handleItemDelete={mockHandleDelete}
      />
    );
  });

  it("should display all of the item details", () => {
    expect(screen.getByText("Item name: Toy train")).toBeInTheDocument();
    expect(screen.getByText("Price: £10")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should call mockHandleQuantityChange when increment button is clicked", async () => {
    const user = userEvent.setup();

    const incrementButton = screen.getByRole("button", { name: /\+/ });

    await user.click(incrementButton);

    expect(mockHandleQuantityChange).toHaveBeenCalledTimes(1);
  });

  it("should call mockHandleQuantityChange when decrement button is clicked", async () => {
    const user = userEvent.setup();

    const decrementButton = screen.getByRole("button", { name: /-/ });

    await user.click(decrementButton);

    expect(mockHandleQuantityChange).toHaveBeenCalledTimes(1);
  });

  it("should call mockDelete when the delete button is clicked", async () => {
    const user = userEvent.setup();
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    await user.click(deleteButton);

    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
  });
});
