import { describe, it, expect } from "vitest";
import { captureStack } from "../tasks/captureStack.js";

describe("captureStack", () => {
  it("captures stack for a function", () => {
    const stack = captureStack(() => {});
    expect(typeof stack).toBe("string");
    expect(stack.length).toBeGreaterThan(0);
  });
});
