import { render, screen } from "@testing-library/react";

import App from "../App";
import { describe, it, expect, afterEach } from "vitest";

describe("rendering app and verify if button is present", () => {
  render(<App />);
  const appBtn = screen.getByRole("button");
  it("is it in the document?", () => {
    expect(appBtn).toBeInTheDocument();
  });
});

afterEach(async () => {
  await clearTestingData();
});
