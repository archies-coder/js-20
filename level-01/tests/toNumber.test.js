import { describe, it, expect } from "vitest";
import { toNumber } from "../tasks/toNumber.js";

describe("toNumber", () => {
  it("handles primitives", () => {
    expect(toNumber(5)).toBe(5);
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
    expect(toNumber(null)).toBe(0);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });
  it("parses strings strictly", () => {
    expect(toNumber("  42 ")).toBe(42);
    expect(() => toNumber("abc")).toThrow();
    expect(toNumber("")).toBe(0);
  });
  it("rejects bigint and objects", () => {
    expect(() => toNumber(1n)).toThrow(TypeError);
    expect(() => toNumber({})).toThrow(TypeError);
  });
});
