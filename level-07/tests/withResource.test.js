import { describe, it, expect } from "vitest";
import { withResource } from "../tasks/withResource.js";

describe("withResource", () => {
  it("cleans up on success and failure", async () => {
    let closed = 0;
    const res = await withResource(
      async () => ({}),
      async () => 42,
      async () => { closed++; }
    );
    expect(res).toBe(42);
    expect(closed).toBe(1);
    await expect(withResource(async () => ({}), async () => { throw new Error("x"); }, async () => { closed++; })).rejects.toThrow();
    expect(closed).toBe(2);
  });
});
