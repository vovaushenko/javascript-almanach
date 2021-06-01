// Object.keys, values, entries
// For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

// 🟢🟢🟢🟢Transforming objects🟢🟢🟢🟢

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const double = Object.fromEntries(Object.entries(prices).map(([key, val]) => [key, val * 2]));

console.log(double);
