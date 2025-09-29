import { describe, it, expect } from "vitest";
import { assert } from "../tasks/assert.js";

describe("assert (JSDoc)", () => {
  it("narrows boolean conditions", () => {
    const x = true;
    expect(() => assert(x)).not.toThrow();
  });
});
