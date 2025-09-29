import { describe, it, expect } from "vitest";
import { curry } from "../tasks/curry.js";

describe("curry", () => {
  it("curries a 3-arity function", () => {
    const add3 = (a, b, c) => a + b + c;
    const cAdd3 = curry(add3);
    expect(cAdd3(1)(2)(3)).toBe(6);
    expect(cAdd3(1, 2)(3)).toBe(6);
  });
  it("errors on over-application", () => {
    const add2 = (a, b) => a + b;
    const cAdd2 = curry(add2);
    expect(() => cAdd2(1, 2, 3)).toThrow();
  });
});
