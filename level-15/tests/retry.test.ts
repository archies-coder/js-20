import { describe, it, expect } from "vitest";
import { retry } from "../tasks/retry";

describe("retry", () => {
  it("retries and eventually succeeds", async () => {
    let attempts = 0;
    const result = retry(async () => {
      attempts++;
      if (attempts < 2) throw new Error("x");
      return 42;
    }, { retries: 3 });
    await expect(result).resolves.toBe(42);
  });
});
