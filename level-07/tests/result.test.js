import { describe, it, expect } from "vitest";
import { Ok, Err, isOk, isErr } from "../tasks/result.js";

describe("Result", () => {
  it("constructs Ok and Err", () => {
    const ok = Ok(1), err = Err(new Error("x"));
    expect(isOk(ok)).toBe(true);
    expect(isErr(err)).toBe(true);
  });
});
