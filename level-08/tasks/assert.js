/**
 * @template {boolean} T
 * @param {T} cond
 * @param {string=} msg
 * @returns {asserts cond}
 */
export function assert(cond, msg) {
  if (!cond) throw new Error(msg || "Assertion failed");
}
