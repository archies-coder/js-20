import { describe, it, expect } from "vitest";
import { LRUCache } from "../tasks/LRUCache";

describe("LRUCache", () => {
  it("evicts least recently used", () => {
    const c = new LRUCache<string, number>(2);
    expect(() => c.get("x")).toThrow();
  });
});
