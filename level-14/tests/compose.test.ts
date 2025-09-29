import { describe, it, expect } from "vitest";
import { compose, pipe } from "../tasks/compose";

describe("compose/pipe", () => {
  it("composes functions", () => {
    const inc = (x: number) => x + 1;
    const dbl = (x: number) => x * 2;
    const f = compose(inc, dbl);
    expect(f(2)).toBe(6);
    expect(pipe(2, inc, dbl)).toBe(6);
  });
});
