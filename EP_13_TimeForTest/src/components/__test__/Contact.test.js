import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us Page test cases", () => {
  test("test should  load contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("should load button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("should load input name inside Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("First-Name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load 6 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(6);
    // console.log(inputBoxes)
  });
});
