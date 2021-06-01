// ⭐⭐⭐⭐  1️⃣str.match(regexp) ⭐⭐⭐⭐

// The method str.match(regexp) finds matches for regexp in the string str.
// It has 3 modes:

// 1️⃣If the regexp doesn’t have flag g, then it returns the first match
// 2️⃣If the regexp has flag g, then it returns an array of all matches as strings, without capturing groups and other details.

let str = 'I love JavaScript javajava';

let result = str.match(/Java(Script|Java)/gi);

console.log(result); // JavaScript

// 3️⃣ If there are no matches, no matter if there’s flag g or not, null is returned.

// ⭐⭐⭐⭐  2️⃣str.matchAll(regexp) ⭐⭐⭐⭐

// The method str.matchAll(regexp) is a “newer, improved” variant of str.match.

// There are 3 differences from match:

// 1️⃣It returns an iterable object with matches instead of an array. We can make a regular array from it using Array.from.
// 2️⃣Every match is returned as an array with capturing groups (the same format as str.match without flag g).
// 3️⃣If there are no results, it returns not null, but an empty iterable object.

// Usage example:
let str2 = '<h1>Hello, world!</h1>';
let regexp = /<(.*?)>/g;
let matchAll = str.matchAll(regexp);
console.log(matchAll);
let res = Array.from(matchAll);
console.log(res);
let firstMatch = res[0];

// ⭐⭐⭐⭐  3️⃣ str.split(regexp|substr, limit) ⭐⭐⭐⭐

// Splits the string using the regexp (or a substring) as a delimiter.

// We can use split with strings, like this:

console.log('12-34-56'.split('-')); // array of ['12', '34', '56']
console.log('12, 34, 56'.split(/,\s*/)); // array of ['12', '34', '56']

// ⭐⭐⭐⭐  3️⃣ str.search(regexp) ⭐⭐⭐⭐

// The method str.search(regexp) returns the position of the first match or -1 if none found:
let str4 = 'A drop of ink may make a million think';

console.log(str4.search(/ink/i)); // 10 (first match position)

// ⭐⭐⭐⭐  4️⃣ str.replace(str|regexp, str|func) ⭐⭐⭐⭐

// This is a generic method for searching and replacing, one of most useful ones. The swiss army knife for searching and replacing.

// replace all dashes by a colon
console.log('12-34-56'.replace(/-/g, ':')); // 12:34:56
