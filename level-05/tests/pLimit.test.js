import { describe, it, expect } from "vitest";
import { pLimit } from "../tasks/pLimit.js";

describe("pLimit", () => {
  it("limits concurrency", async () => {
    const limit = pLimit(2);
    let running = 0, maxRunning = 0;
    const task = (x) => limit(async () => {
      running++; maxRunning = Math.max(maxRunning, running);
      await new Promise((r) => setTimeout(r, 10));
      running--;
      return x * 2;
    });
    const results = await Promise.all([task(1), task(2), task(3), task(4)]);
    expect(results).toEqual([2,4,6,8]);
    expect(maxRunning).toBeLessThanOrEqual(2);
  });
});
