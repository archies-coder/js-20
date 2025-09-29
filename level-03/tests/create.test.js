import { describe, it, expect } from "vitest";
import { create } from "../tasks/create.js";

describe("create", () => {
  it("creates with proto and descriptors", () => {
    const proto = { inc() { this.x++; } };
    const o = create(proto, { x: { value: 1, writable: true, enumerable: true } });
    expect(Object.getPrototypeOf(o)).toBe(proto);
    o.inc();
    expect(o.x).toBe(2);
  });
});
