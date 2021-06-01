// Square brackets may also contain character ranges.

// For instance, [a-z] is a character in range from a to z, and [0-5] is a digit from 0 to 5.

// ⭐ In the example below we’re searching for "x" followed by two digits or letters from A to F:

console.log('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/g)); // xAF

// ❗❗ Here [0-9A-F] has two ranges: it searches for a character that is either a digit from 0 to 9 or a letter from A to F. ❗❗

//❗❗ If we’d like to look for lowercase letters as well, we can add the range a-f: [0-9A-Fa-f]. Or add the flag i. ❗❗

//❗❗ We can also use character classes inside […].

// ⭐ For instance, if we’d like to look for a wordly character \w or a hyphen -, then the set is [\w-].

// ⭐ Combining multiple classes is also possible, e.g. [\s\d] means “a space character or a digit”.

// 🟢🟢Character classes are shorthands for certain character sets🟢🟢

// For instance:

// 1️⃣ \d – is the same as [0-9],
// 2️⃣ \w – is the same as [a-zA-Z0-9_],
// 3️⃣ \s – is the same as [\t\n\v\f\r ], plus few other rare Unicode space characters.

// ⭐ Example: multi-language \w

// As the character class \w is a shorthand for [a-zA-Z0-9_], it can’t find Chinese hieroglyphs, Cyrillic letters, etc.

// We can write a more universal pattern, that looks for wordly characters in any language. That’s easy with Unicode properties:
// [\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]

let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;

let str = `Hi 你好 12`;

// finds all letters and digits:
console.log(str.match(regexp));
