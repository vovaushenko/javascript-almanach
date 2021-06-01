////// Patterns and flags \\\\\\\\

// Regular expressions are patterns that provide a powerful way to search and replace in text.

// In JavaScript, they are available via the RegExp object, as well as being integrated in methods of strings.

// 🟢🟢🟢 Regular Expressions 🟢🟢🟢

// A regular expression (also “regexp”, or just “reg”) consists of a pattern and optional flags.

// There are two syntaxes that can be used to create a regular expression object.

// The “long” syntax:

regexp = new RegExp('pattern', 'flags');

// And the “short” one, using slashes "/":

regexp = /pattern/; // no flags
regexp = /pattern/gim; // with flags g,m and i (to be covered soon)

// ❗❗❗ The main difference between these two syntaxes is that pattern using slashes /.../ does not allow for expressions to be inserted (like string template literals with ${...}). They are fully static.

/*
              ⭐⭐⭐Flags⭐⭐⭐
*/
// There are only 6 of them in JavaScript:

// 1️⃣ i
// With this flag the search is case-insensitive: no difference between A and a (see the example below).

//2️⃣ g
// With this flag the search looks for all matches, without it – only the first match is returned.

//3️⃣ m
// Multiline mode (covered in the chapter Multiline mode of anchors ^ $, flag "m").

//4️⃣ s
// Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).

//5️⃣ u
// Enables full Unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u" and class \p{...}.

//6️⃣ y
// “Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag "y", searching at position)
// Colors
