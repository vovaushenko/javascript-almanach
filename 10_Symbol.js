// Symbol type
// By specification, object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.

// π’π’π’ Symbols π’π’π’
// A βsymbolβ represents a unique identifier.

let id = Symbol();

// Upon creation, we can give symbol a description
let id2 = Symbol('id');
let id3 = Symbol('id');

console.log(id2);
console.log(id2 === id3); //false

// symbol descriptio
console.log(id2.description);

//     π’π’π’    βHiddenβ properties   π’π’π’
// Symbols allow us to create βhiddenβ properties of an object, that no other part of code can accidentally access or overwrite.

let user = {
  // belongs to another code
  name: 'John',
};

let userId = Symbol('id');
user[id] = 1;

console.log(user[id]); //  1

user[userId] = 'cool';

console.log(user);

// π’π’π’   Symbols in an object literal  π’π’π’

let id4 = Symbol('id');
let user2 = {
  name: 'John',
  [id4]: 123, // not "id": 123
};

// Symbols are skipped by forβ¦in

for (let key in user2) console.log(key);
