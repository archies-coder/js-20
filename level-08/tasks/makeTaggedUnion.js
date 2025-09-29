export function makeTaggedUnion(cases) {
  return /** @type {any} */ (
    Object.keys(cases).map((k) => ({ type: k, ...cases[k] }))
  );
}
