import { describe, it, expect } from "vitest";
import { safeAdd } from "../tasks/safeAdd.js";

describe("safeAdd", () => {
  it("adds numbers", () => {
    expect(safeAdd(1, 2)).toBe(3);
  });
  it("throws on mixed bigint/number", () => {
    expect(() => safeAdd(1n, 2)).toThrow(TypeError);
  });
  it("adds bigints", () => {
    expect(safeAdd(1n, 2n)).toBe(3n);
  });
});
