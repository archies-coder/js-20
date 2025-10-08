export function toNumber(value) {
  console.log(value, typeof value);
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const tryParseInt = parseInt(value.trim());
    if (Number.isNaN(tryParseInt)) {
      throw new TypeError("Invalid number");
    }
  }

  return parseInt(value.trim());
}
