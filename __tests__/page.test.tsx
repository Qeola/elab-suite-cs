import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<h1>Home</h1>);
    expect(screen.getByRole("heading")).toHaveTextContent("Home");
  });
});
