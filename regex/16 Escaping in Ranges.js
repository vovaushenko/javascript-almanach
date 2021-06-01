// Escaping in […]

// Usually when we want to find exactly a special character, we need to escape it like \.. And if we need a backslash, then we use \\, and so on.

// In square brackets we can use the vast majority of special characters without escaping:

// ⭐ Symbols . + ( ) never need escaping.
// ⭐ A hyphen - is not escaped in the beginning or the end (where it does not define a range).
// ⭐ A caret ^ is only escaped in the beginning (where it means exclusion).
// ⭐ The closing square bracket ] is always escaped (if we need to look for that symbol).

// In other words, all special characters are allowed without escaping, except when they mean something for square brackets.

// A dot . inside square brackets means just a dot. The pattern [.,] would look for one of characters: either a dot or a comma.

// In the example below the regexp [-().^+] looks for one of the characters -().^+:

//  No need to escape
let regexp = /[-().^+]/g;

console.log('1 + 2 - 3'.match(regexp)); // Matches +, -

let regexp2 = /[-().^+][\w]/g;

console.log('1 + 2 -z 3'.match(regexp2)); //-z
