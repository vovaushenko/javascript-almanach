// Besides normal ranges, there are “excluding” ranges that look like [^…].

// They are denoted by a caret character ^ at the start and match any character except the given ones.

// For instance:

// 1️⃣ [^aeyo] – any character except 'a', 'e', 'y' or 'o'.
// 2️⃣ [^0-9] – any character except a digit, the same as \D.
// 3️⃣ [^\s] – any non-space character, same as \S.

// The example below looks for any characters except letters, digits and spaces:

console.log('alice15@gmail.com'.match(/[^\d\sA-Z]/gi)); // @ and .

let str = 'alice15@gmail.com';
console.log(str.replace(/[\da-z]/gi, ''));
