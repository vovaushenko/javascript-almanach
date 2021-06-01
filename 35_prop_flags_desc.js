// 'use strict';

// 🍏🍏🍏Property flags 🍏🍏🍏

// Object properties, besides a value, have three special attributes (so-called “flags”):

// 🍏writable🍏 – if true, the value can be changed, otherwise it’s read-only.
// 🍏enumerable🍏 – if true, then listed in loops, otherwise not listed.
// 🍏configurable🍏 – if true, the property can be deleted and these attributes can be modified, otherwise not.

// The method 🍏Object.getOwnPropertyDescriptor🍏 allows to query the full information about a property.

let user = {
  name: 'John',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor);
// { value: 'John', writable: true, enumerable: true, configurable: true }

//  🍏🍏🍏To change the flags, we can use Object.defineProperty. 🍏🍏🍏

// Object.defineProperty(obj, propertyName, descriptor)

let user1 = {};
Object.defineProperty(user1, 'name', {
  value: 'John',
});

let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');

// {
//   value: 'John',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// 🟩🟩 Non-writable 🟩🟩

let user3 = {
  name: 'John',
};

Object.defineProperty(user3, 'name', {
  writable: false,
});

user3.name = 'Pete'; // will be error in strict mode

// 🟩🟩 Non-enumerable 🟩🟩
let user4 = {
  name: 'John',
  toString() {
    return this.name;
  },
};

for (let key in user4) console.log(key);

// If we don’t like it, then we can set enumerable:false.
Object.defineProperty(user4, 'toString', {
  enumerable: false,
});

for (let key in user4) console.log(key);

// 🟩🟩 Non-configurable 🟩🟩

// Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

// To be precise, non-configurability imposes several restrictions on defineProperty:

// Can’t change configurable flag.
// Can’t change enumerable flag.
// Can’t change writable: false to true (the other way round works).
// Can’t change get/set for an accessor property (but can assign them if absent).

// And here we make user.name a “forever sealed” constant:

let user5 = {
  name: 'John',
};
Object.defineProperty(user5, 'name', {
  writable: false,
  configurable: false,
});

user5.name = 'Alex';
delete user5.name;
console.log(user5);
