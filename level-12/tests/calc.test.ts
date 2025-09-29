import { describe, it, expect } from "vitest";
import { add } from "../tasks/calc";

describe("calc", () => {
  it("adds basic numbers", () => {
    expect(add(1,2)).toBe(3);
  });
});
