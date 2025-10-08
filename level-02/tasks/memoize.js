export function memoize(fn, keyFn, maxSize = 100) {
  const cache = {};

  return (...args) => {
    const cached = cache[keyFn(...args)]
    if(cached) {
      return  cached
    }

    const newKey= keyFn(...args)
    const newVal = fn(...args)
    if(Object.keys(cache).length === maxSize) {
      delete cache[Object.keys(cache)[0]]
    }

    cache[newKey] = newVal

    return newVal
  }
}
