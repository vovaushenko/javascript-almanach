// Inverse classes

// For every character class there exists an “inverse class”, denoted with the same letter, but uppercased.

//⭐ The “inverse” means that it matches all other characters, for instance: ⭐

//1️⃣ \D
// Non-digit: any character except \d, for instance a letter.

//2️⃣ \S
// Non-space: any character except \s, for instance a letter.

//3️⃣ \W
// Non-wordly character: anything but \w, e.g a non-latin letter or a space.

// In the beginning of the chapter we saw how to make a number-only phone number from a string like +7(903)-123-45-67: find all digits and join them.

let str = '+7(903)-123-45-67';

console.log(str.match(/\d/g).join(''));

// alternative

console.log(str.replace(/\D/g, ''));

//❗❗❗❗❗❗ A dot is “any character” ❗❗❗❗❗

// A dot . is a special character class that matches “any character except a newline”.

// For instance:

console.log('Z'.match(/./)); // Z

// Or in the middle of a regexp:

let regexp = /CS.4/;

console.log('CSS4'.match(regexp)); // CSS4
console.log('CS-4'.match(regexp)); // CS-4
console.log('CS 4'.match(regexp)); // CS 4 (space is also a character)

// Please note that a dot means “any character”, but not the “absence of a character”. There must be a character to match it:
console.log('CS4'.match(/CS.4/)); // null, no match because there's no character for the dot

// ⭐⭐⭐ Dot as literally any character with “s” flag ⭐⭐⭐

//  default, a dot doesn’t match the newline character \n.

// For instance, the regexp A.B matches A, and then B with any character between them, except a newline \n:

console.log('A\nB'.match(/A.B/)); // null (no match)

// There are many situations when we’d like a dot to mean literally “any character”, newline included.

// That’s what flag s does. If a regexp has it, then a dot . matches literally any character:

console.log('A\nB'.match(/A.B/s)); // A\nB (match!)
