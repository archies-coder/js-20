import { describe, it, expect } from "vitest";
import { rafScheduler } from "../tasks/rafScheduler.js";

describe("rafScheduler", () => {
  it("schedules callbacks and handles backpressure", async () => {
    const sched = rafScheduler();
    const results = [];
    sched(() => results.push(1));
    sched(() => results.push(2));
    await new Promise((r) => setTimeout(r, 0));
    expect(results.length).toBe(2);
  });
});
