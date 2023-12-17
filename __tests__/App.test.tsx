import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";
import { render } from "@testing-library/react";
import App from "../src/App";

enableFetchMocks();

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
