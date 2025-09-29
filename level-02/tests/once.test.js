import { describe, it, expect, vi } from "vitest";
import { once } from "../tasks/once.js";

describe("once", () => {
  it("invokes only once and returns cached result", () => {
    const fn = vi.fn((x) => x + 1);
    const o = once(fn);
    expect(o(1)).toBe(2);
    expect(o(10)).toBe(2);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
