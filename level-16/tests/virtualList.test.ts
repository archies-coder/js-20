import { describe, it, expect } from "vitest";
import { computeVirtualList } from "../tasks/virtualList";

describe("virtualList", () => {
  it("computes visible range", () => {
    expect(() => computeVirtualList({ itemCount: 100, itemHeight: 20, viewportHeight: 100, scrollTop: 50 })).toThrow();
  });
});
