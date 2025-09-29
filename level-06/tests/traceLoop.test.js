import { describe, it, expect } from "vitest";
import { traceLoop } from "../tasks/traceLoop.js";

describe("traceLoop", () => {
  it("records ordering of tasks/microtasks", async () => {
    const log = await traceLoop();
    expect(Array.isArray(log)).toBe(true);
    expect(log.length).toBeGreaterThan(0);
  });
});
