// The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).

// The modern methods are:

// Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

let animal = {
  eats: true,
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});

console.log(rabbit.eats);

let arr = ['a', 'b', 'c'];
for (let key in arr) console.log(key);
