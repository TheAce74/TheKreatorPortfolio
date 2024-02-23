import { it, describe } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

/*
the test suite below fails cus of the window object used in the header component
so comment that out if you want a passing test
*/

describe("App", () => {
  it("renders correctly", () => {
    render(<App />);
  });
});
