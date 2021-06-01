// Greedy and lazy quantifiers

// https://javascript.info/regexp-greedy-and-lazy

let regexpGreedy = /".+"/g;
// we want to find "witch" and "broom" separately
let str = 'a "witch" and her "broom" is one';

console.log(str.match(regexpGreedy)); // "witch" and her "broom"

// 🟢 Greedy search 🟢

// To find a match, the regular expression engine uses the following algorithm:

// ⭐ For every position in the string
//    1️⃣ Try to match the pattern at that position.
//    2️⃣ If there’s no match, go to the next position.

// By default the regular expression engine tries to repeat the quantified character as many times as possible. For instance, \d+ consumes all possible digits. When it becomes impossible to consume more (no more digits or string end), then it continues to match the rest of the pattern. If there’s no match then it decreases the number of repetitions (backtracks) and tries again.

/////////////////////////////////////////////////////////

// 🟢 Lazy search 🟢

// The lazy mode of quantifiers is an opposite to the greedy mode. It means: “repeat minimal number of times”.

// We can enable it by putting a question mark '?' after the quantifier, so that it becomes *? or +? or even ?? for '?'.

let str2 = 'a "witch" and her "broom" is one';
let regexpLazy = /".+?"/g;

console.log(str2.match(regexpLazy));

// To make things clear: usually a question mark ? is a quantifier by itself (zero or one), but if added after another quantifier (or even itself) it gets another meaning – it switches the matching mode from greedy to lazy.

// ❗ Laziness is only enabled for the quantifier with ?.
console.log('123 456'.match(/\d+ \d+?/g)); // 123 4
