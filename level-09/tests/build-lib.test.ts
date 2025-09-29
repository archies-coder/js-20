import { describe, it, expect } from "vitest";
import { add } from "../build-lib/src/index";

describe("build-lib (TS)", () => {
  it("adds", () => {
    expect(add(1, 2)).toBe(3);
  });
});
