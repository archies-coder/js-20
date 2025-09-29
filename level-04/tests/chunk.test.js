import { describe, it, expect } from "vitest";
import { chunk } from "../tasks/chunk.js";

describe("chunk", () => {
  it("yields chunks lazily", () => {
    const it = chunk([1,2,3,4,5], 2);
    expect([...it]).toEqual([[1,2],[3,4],[5]]);
  });
});
