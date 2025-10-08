import { describe, it, expect } from "vitest";
import { memoize } from "../tasks/memoize.js";

describe("memoize", () => {
  it("caches results by args and respects keyFn", () => {
    let calls = 0;
    const fn = (x, y) => {
      calls++;
      return x + y;
    };
    const m = memoize(fn, (x, y) => `${x}-${y}`);
    expect(m(1, 2)).toBe(3);
    expect(m(1, 2)).toBe(3);
    expect(calls).toBe(1);
  });

  it("supports bounded cache size with eviction", () => {
    let calls = 0;
    const fn = (x) => {
      calls++;
      return x * 2;
    };
    const m = memoize(fn, (x) => String(x), 2);
    m(1);
    m(2);
    m(3); // should evict one of the older keys
    m(1); // likely a miss after eviction policy
    expect(calls).toBeGreaterThanOrEqual(4);
  });
});
