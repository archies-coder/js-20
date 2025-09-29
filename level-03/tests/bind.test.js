import { describe, it, expect } from "vitest";
import { bind } from "../tasks/bind.js";

describe("bind", () => {
  it("binds this and args, preserves new behavior", () => {
    function C(x, y) { this.z = x + y; }
    C.prototype.get = function() { return this.z; };
    const o = { a: 1 };
    const B = bind(C, o, 2);
    const c = new B(3);
    expect(c instanceof C).toBe(true);
    expect(c.get()).toBe(5);
  });
});
