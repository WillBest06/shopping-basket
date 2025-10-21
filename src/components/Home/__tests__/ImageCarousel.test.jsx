import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

const mockImages = [
  { url: "/image1.jpg" },
  { url: "/image2.jpg" },
  { url: "/image3.jpg" },
];

describe("Image carousel test suite", () => {
  it("Should display an image carousel with test visible", () => {
    render(<ImageCarousel images={mockImages} />);
    expect(screen.getByTestId("image_element")).toHaveAttribute(
      "src",
      "/image1.jpg"
    );
  });

  it("Should change to image 2 when clicking the right arrow", async () => {
    render(<ImageCarousel images={mockImages} />);
    await userEvent.click(screen.getByText(">"));
    expect(screen.getByTestId("image_element")).toHaveAttribute(
      "src",
      "/image2.jpg"
    );
  });

  it("Should change to the last image when clicking left arrow on the first image", async () => {
    render(<ImageCarousel images={mockImages} />);
    await userEvent.click(screen.getByText("<"));
    expect(screen.getByTestId("image_element")).toHaveAttribute(
      "src",
      "/image3.jpg"
    );
  });

  it("Should change to the first image when clicking right arrow on the first image", async () => {
    render(<ImageCarousel images={mockImages} />);
    await userEvent.click(screen.getByText("<"));
    expect(screen.getByTestId("image_element")).toHaveAttribute(
      "src",
      "/image3.jpg"
    );
  });
});
