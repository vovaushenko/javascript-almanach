// Consider a practical task – we have a phone number like "+7(903)-123-45-67", and we need to turn it into pure numbers: 79031234567.

// Character classes can help with that.

// ⭐⭐⭐ A character class is a special notation that matches any symbol from a certain set. ⭐⭐⭐

// For the start, let’s explore the “digit” class. It’s written as \d and corresponds to “any single digit”.

// ⭐ \d  ⭐

// For instance, let’s find the first digit in the phone number:

let str = '+7(903)-123-45-67';

let regexp = /\d/;
console.log(str.match(regexp));

// Let’s add the g flag to find all digits:

let digits = str.match(/\d/g);
console.log(digits);

// That was a character class for digits. There are other character classes as well.

//⭐⭐⭐⭐⭐⭐⭐⭐⭐ Most used are:⭐⭐⭐⭐⭐⭐⭐⭐⭐
//1️⃣  \d (“d” is from “digit”)
// A digit: a character from 0 to 9.

//2️⃣  \s (“s” is from “space”)
// A space symbol: includes spaces, tabs \t, newlines \n and few other rare characters, such as \v, \f and \r.

//3️⃣ \w (“w” is from “word”)
// A “wordly” character: either a letter of Latin alphabet or a digit or an underscore _. Non-Latin letters (like cyrillic or hindi) do not belong to \w.
// For instance, \d\s\w means a “digit” followed by a “space character” followed by a “wordly character”, such as 1 a.

// For instance, \d\s\w means a “digit” followed by a “space character” followed by a “wordly character”, such as 1 a.

//⭐⭐⭐⭐⭐⭐⭐⭐⭐//⭐⭐⭐⭐⭐⭐⭐⭐⭐//⭐⭐⭐⭐⭐⭐⭐⭐⭐//⭐⭐⭐⭐⭐

// ⭐⭐ A regexp may contain both regular symbols and character classes. ⭐⭐

// ❗ For instance, CSS\d matches a string CSS with a digit after it:

let str2 = 'Is there CSS4?';
let reg = /CSS\d/;

console.log(str2.match(reg));

// Also we can use many character classes:

console.log('I love HTML5!'.match(/\s\w\w\w\w\d/)); ///HTML5
