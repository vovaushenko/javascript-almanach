// Transparent caching

// Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.

// If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations

function slow(x) {
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

// In the code above cachingDecorator is a decorator: a special function that takes another function and alters its behavior.
