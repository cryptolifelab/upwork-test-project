import React from "react";
import { render, screen } from "@testing-library/react";
import OrderBy from "./index";

const toggleOrder = () => {};

test("renders order by dropdown", () => {
  render(<OrderBy toggleOrder={toggleOrder} />);
  const linkElement = screen.getByRole("select");
  expect(linkElement).toBeInTheDocument();
});
