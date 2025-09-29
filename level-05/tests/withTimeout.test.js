import { describe, it, expect } from "vitest";
import { withTimeout } from "../tasks/withTimeout.js";

describe("withTimeout", () => {
  it("rejects if promise takes too long", async () => {
    const slow = new Promise((r) => setTimeout(() => r(42), 30));
    await expect(withTimeout(slow, 5)).rejects.toBeInstanceOf(Error);
  });
  it("resolves if fast enough", async () => {
    const fast = Promise.resolve(7);
    await expect(withTimeout(fast, 20)).resolves.toBe(7);
  });
});
