// 🟩🟩🟩  Cloning and merging, Object.assign 🟩🟩🟩

// iterating and copying on a primitive level
let user = {
  name: 'John',
  age: 30,
};

let clone = {};

for (let prop in user) {
  clone[prop] = user[prop];
}

console.log(clone);

// Also we can use the method 🟩Object.assign🟩 for that.

// 🟩🟩🟩Object.assign(dest, [src1, src2, src3...])🟩🟩🟩

// The first argument dest is a target object.
// Further arguments src1, ..., srcN (can be as many as needed) are source objects.
// It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.
// The call returns dest.

let user1 = { name: 'John' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user1, permissions1, permissions2);

console.log(user1);

// We also can use Object.assign to replace for..in loop for simple cloning:

let user3 = {
  name: 'John',
  age: 30,
};

let clone1 = Object.assign({}, user3);

console.log(clone1);
