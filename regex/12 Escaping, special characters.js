// https://javascript.info/regexp-escaping

// Escaping, special characters

//1️⃣  To search for special characters [ \ ^ $ . | ? * + ( ) literally, we need to prepend them with a backslash \ (“escape them”).

//2️⃣  We also need to escape / if we’re inside /.../ (but not inside new RegExp).

//3️⃣  When passing a string to new RegExp, we need to double backslashes \\, cause string quotes consume one of them.

// Let’s say we want to find literally a dot. Not “any character”, but just a dot.

// To use a special character as a regular one, prepend it with a backslash: \..

// That’s also called “escaping a character”.

console.log('Chapter 5.1'.match(/\d\.\d/)); // 5.1 (match!)
console.log('Chapter 511'.match(/\d\.\d/)); // null (looking for a real dot \.)

// Parentheses are also special characters, so if we want them, we should use \(. The example below looks for a string "g()":

console.log('function g()'.match(/g\(\)/)); // "g()"
console.log('function g()'.match(/g()/)); // "g()"
