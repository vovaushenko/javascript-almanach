// Sometimes we need to find only those matches for a pattern that are followed or preceded by another pattern.

// There’s a special syntax for that, called “lookahead” and “lookbehind”, together referred to as “lookaround”.

// ⭐ For the start, let’s find the price from the string like 1 turkey costs 30€. That is: a number, followed by € sign.

// 🟢 Lookahead 🟢

// The syntax is: X(?=Y), it means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y.

// For an integer number followed by €, the regexp will be \d+(?=€):

let str = '1 turkey costs 30€';

let reg = /\d+(?=€)/g;

console.log(str.match(reg));

// Please note: the lookahead is merely a test, the contents of the parentheses (?=...) is not included in the result 30.

// When we look for X(?=Y), the regular expression engine finds X and then checks if there’s Y immediately after it. If it’s not so, then the potential match is skipped, and the search continues.

// More complex tests are possible, e.g. X(?=Y)(?=Z) means:

// 1️⃣ Find X.
// 2️⃣ Check if Y is immediately after X (skip if isn’t).
// 3️⃣ Check if Z is also immediately after X (skip if isn’t).
// 4️⃣ If both tests passed, then the X is a match, otherwise continue searching.

// In other words, such pattern means that we’re looking for X followed by Y and Z at the same time.

// For example, \d+(?=\s)(?=.*30) looks for \d+ that is followed by a space (?=\s), and there’s 30 somewhere after it (?=.*30):

let str2 = '1 turkey costs 30€';

console.log(str2.match(/\d+(?=\s)(?=.*30)/)); // 1

// 🟢 Negative lookahead 🟢

// Let’s say that we want a quantity instead, not a price from the same string. That’s a number \d+, NOT followed by €.

// For that, a negative lookahead can be applied.

// The syntax is: X(?!Y), it means "search X, but only if not followed by Y".

let str3 = '2 turkeys cost 60€';

console.log(str3.match(/\d+\b(?!€)/g)); // 2 (the price is not matched)
