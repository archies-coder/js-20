import { describe, it, expect } from "vitest";
import { deepFreeze } from "../tasks/deepFreeze.js";

describe("deepFreeze", () => {
  it("freezes deeply and ignores cycles", () => {
    const a = { x: { y: 1 } };
    a.self = a;
    const f = deepFreeze(a);
    expect(Object.isFrozen(f)).toBe(true);
    expect(Object.isFrozen(f.x)).toBe(true);
    expect(() => { f.x.y = 2; }).toThrow();
  });
});
