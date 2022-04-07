import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders joblist", async () => {
  render(<App />);
  setTimeout(async () => {
    const jobsElement = screen.getByTestId("app-jobs");
    const previousButton = screen.getByRole("button");
    expect(previousButton).toBeDisabled();
    expect(jobsElement).toBeInTheDocument();
  }, 5000);
});
