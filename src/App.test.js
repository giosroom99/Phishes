import { render, screen } from "@testing-library/react";
import React from "react";
import { Header, MyForm } from "./App";

describe("Header", () => {
  it("should render the header with the correct text", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Phishes")).toBeTruthy();
    expect(
      getByText(
        "There are lots of fishes in the ocean, Can you spot the bad one?"
      )
    ).toBeTruthy();
    expect(getByText("Let Phishes help you")).toBeTruthy();
  });
});

describe("MyForm", () => {
  it("should render MyForm with the correct text", () => {
    const { getByText } = render(<MyForm />);

    expect(getByText("Enter your Email Body here:")).toBeTruthy();
    
  });
});
