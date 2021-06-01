// 🟢🟢The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.🟢🟢

// Such a check may be necessary in many cases. For example, it can be used for building a polymorphic function, the one that treats arguments differently depending on their type.

// 🟢🟢  obj instanceof Class; 🟢🟢
class Rabbit {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true
console.log(rabbit instanceof Array); // false
console.log(rabbit instanceof Object); // true
console.log('🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬');
// It also works with constructor functions:

// instead of class
function Wolf() {}
console.log(new Wolf() instanceof Wolf);
console.log('🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬');

// …And with built-in classes like Array:

let arr = [1, 2, 3, 4];
console.log(arr instanceof Array);
console.log(arr instanceof Object);
// That’s because Array prototypically inherits from Object.
