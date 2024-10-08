import React from 'react';
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../app/page.tsx";
console.log(Home);


describe("Home Page", () => {
  it("check for relevant text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("This is the home page")).toBeInTheDocument();
  });
});