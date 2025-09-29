import { describe, it, expect } from "vitest";
import { promisify } from "../tasks/promisify.js";

describe("promisify", () => {
  it("converts error-first callback function to promise", async () => {
    function legacy(x, cb) { setTimeout(() => cb(null, x + 1), 5); }
    const p = promisify(legacy);
    await expect(p(1)).resolves.toBe(2);
  });
});
