import { render, screen } from "@testing-library/react";
import Loader from "./index";

const message = "hello";
test("renders message loader", () => {
  render(<Loader message={message} />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
