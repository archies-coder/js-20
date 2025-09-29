import { describe, it, expect } from "vitest";
import { stringify } from "../tasks/stringify.js";

describe("stringify", () => {
  it("stably stringifies primitives and arrays", () => {
    expect(stringify(1)).toBe("1");
    expect(stringify("a")).toBe('"a"');
    expect(stringify([3, 2, 1])).toBe("[3,2,1]");
  });
  it("orders object keys", () => {
    const s = stringify({ b: 2, a: 1 });
    expect(s).toBe('{"a":1,"b":2}');
  });
  it("throws on cycles", () => {
    const obj = {};
    obj.self = obj;
    expect(() => stringify(obj)).toThrow(TypeError);
  });
});
