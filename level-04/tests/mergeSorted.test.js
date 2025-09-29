import { describe, it, expect } from "vitest";
import { mergeSorted } from "../tasks/mergeSorted.js";

describe("mergeSorted", () => {
  it("merges two sorted iterables", () => {
    const a = [1,3,5];
    const b = [2,4,6];
    expect([...mergeSorted(a, b)]).toEqual([1,2,3,4,5,6]);
  });
});
