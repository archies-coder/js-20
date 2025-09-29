import { describe, it, expect } from "vitest";
import { mapAsync } from "../tasks/mapAsync.js";

describe("mapAsync", () => {
  it("maps with concurrency", async () => {
    const items = [1, 2, 3, 4];
    const results = [];
    const start = Date.now();
    const out = await mapAsync(items, async (x) => {
      await new Promise((r) => setTimeout(r, 10));
      results.push(x);
      return x * 2;
    }, { concurrency: 2 });
    expect(out).toEqual([2, 4, 6, 8]);
    expect(results.length).toBe(4);
    expect(Date.now() - start).toBeLessThan(60);
  });
});
