// JavaScript uses Unicode encoding for strings. Most characters are encoded with 2 bytes, but that allows to represent at most 65536 characters.

// That range is not big enough to encode all possible characters, that’s why some rare characters are encoded with 4 bytes, for instance like 𝒳 (mathematical X) or 😄 (a smile), some hieroglyphs and so on.

// So characters like a and ≈ occupy 2 bytes, while codes for 𝒳, 𝒴 and 😄 are longer, they have 4 bytes.

console.log('😄'.length);

// By default, regular expressions also treat 4-byte “long characters” as a pair of 2-byte ones. And, as it happens with strings, that may lead to odd results. We’ll see that a bit later, in the article Sets and ranges [...].

//⭐⭐⭐ Unlike strings, regular expressions have flag u that fixes such problems. With such flag, a regexp handles 4-byte characters correctly. And also Unicode property search becomes available, we’ll get to it next. ⭐⭐⭐

//🟢🟢🟢 Unicode properties \p{…} 🟢🟢🟢

// Every character in Unicode has a lot of properties. They describe what “category” the character belongs to, contain miscellaneous information about it.

// For instance, if a character has Letter property, it means that the character belongs to an alphabet (of any language). And Number property means that it’s a digit: maybe Arabic or Chinese, and so on.

// We can search for characters with a property, written as \p{…}. To use \p{…}, a regular expression must have flag u

// ⭐⭐ For instance, \p{Letter} denotes a letter in any language. We can also use \p{L}, as L is an alias of Letter. There are shorter aliases for almost every property.
let str = 'A ბ ㄱ';
console.log(str.match(/\p{L}/gu));
console.log(str.match(/\p{L}/g)); // null -> \p does not work without -u flag

// ⭐ Here’s the main character categories and their subcategories:
// https://javascript.info/regexp-unicode

// ❗ So, e.g. if we need letters in lower case, we can write \p{Ll}, punctuation signs: \p{P} and so on.

//❗❗❗ Example: hexadecimal numbers

// For instance, let’s look for hexadecimal numbers, written as xFF, where F is a hex digit (0…1 or A…F).

// A hex digit can be denoted as \p{Hex_Digit}:

let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;

console.log('number: xAF'.match(regexp)); // xAF

//❗❗❗ Example: Chinese hieroglyphs
let regexp1 = /\p{sc=Han}/gu; // returns Chinese hieroglyphs

let ss = `Hello Привет 你好 123_456`;

console.log(ss.match(regexp1)); // 你,好

// Example: currency
// Characters that denote a currency, such as $, €, ¥, have Unicode property \p{Currency_Symbol}, the short alias: \p{Sc}.

let regg = /\p{Sc}\d/gu;

let zzz = `Prices: $2, €1, ¥9`;

console.log(zzz.match(regg)); // $2,€1,¥9
