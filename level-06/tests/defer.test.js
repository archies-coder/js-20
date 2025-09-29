import { describe, it, expect } from "vitest";
import { defer } from "../tasks/defer.js";

describe("defer", () => {
  it("schedules a microtask", async () => {
    const order = [];
    const p = new Promise((r) => r());
    p.then(() => order.push("promise"));
    defer(() => order.push("defer"));
    await Promise.resolve();
    expect(order).toEqual(["promise", "defer"]);
  });
});
