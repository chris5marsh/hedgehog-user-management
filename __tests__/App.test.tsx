import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";
import { render } from "@testing-library/react";
import App from "@src/App";

enableFetchMocks();

test("Renders the main app", () => {
  const app = render(<App />);
  const main = app.container.querySelector("main");
  expect(main).toBeInTheDocument();
});
