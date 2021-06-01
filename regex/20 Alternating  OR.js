// https://javascript.info/regexp-alternation

// In a regular expression it is denoted with a vertical line character |.

// For instance, we need to find programming languages: HTML, PHP, Java or JavaScript.

// The corresponding regexp: html|php|java(script)?.

let regexp = /html|php|css|java(script)?/gi;

let str = 'First HTML appeared, then CSS, then JavaScript';

console.log(str.match(regexp)); // 'HTML', 'CSS', 'JavaScript'

// We already saw a similar thing – square brackets. They allow to choose between multiple characters, for instance gr[ae]y matches gray or grey.

// Square brackets allow only characters or character classes. Alternation allows any expressions. A regexp A|B|C means one of expressions A, B or C.

// For instance:

// 1️⃣ gr(a|e)y means exactly the same as gr[ae]y.
// 2️⃣ gra|ey means gra or ey.
