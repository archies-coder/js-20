export function once(fn) {
  let called = false;
  let result;

  return (...args) => {
    if (called) return result;

    called = true;
    result = fn(...args);

    return result;
  };
}
