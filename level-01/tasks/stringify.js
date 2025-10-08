export function stringify(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    const sortedKyes = Object.keys(value).sort();
    let sortedObject = {};
    for (const key of sortedKyes) {
      sortedObject[key] = value[key];
    }
    return JSON.stringify(sortedObject);
  }

  return JSON.stringify(value);
}
