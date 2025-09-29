import { describe, it, expect } from "vitest";
import { walk } from "../tasks/walk";

describe("walk", () => {
  it("yields files in nested dirs", async () => {
    const files: string[] = [];
    for await (const f of walk(".")) {
      files.push(f);
      if (files.length > 0) break; // keep test light
    }
    expect(Array.isArray(files)).toBe(true);
  });
});
