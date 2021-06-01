// The caret ^ matches at the beginning of the text, and the dollar $ – at the end.

let str1 = 'Mary had a little lamb';
// The pattern ^Mary means: “string start and then Mary”.
console.log(/^Mary/.test(str1)); // true

// Similar to this, we can test if the string ends with snow using snow$:
let str2 = "it's fleece was white as snow";
console.log(/snow$/.test(str2));

// 🟢 Testing for a full match 🟢

// Both anchors together ^...$ are often used to test whether or not a string fully matches the pattern. For instance, to check if the user input is in the right format.

// Let’s check whether or not a string is a time in 12:34 format. That is: two digits, then a colon, and then another two digits.

// In regular expressions language that’s \d\d:\d\d:

let goodInput = '12:34';
let badInput = '12:345';
let regexp = /^\d\d:\d\d$/;
console.log(regexp.test(goodInput)); // true
console.log(regexp.test(badInput)); // false
