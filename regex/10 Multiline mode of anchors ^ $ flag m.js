// https://javascript.info/regexp-multiline-mode

// The multiline mode is enabled by the flag m.

// It only affects the behavior of ^ and $.

// 🟢🟢 Searching at line start ^ 🟢🟢

// In the example below the text has multiple lines. The pattern /^\d/gm takes a digit from the beginning of each line:
let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log(str.match(/^\d/gm)); // 1, 2, 3

// Without the flag m only the first digit is matched:
console.log(str.match(/^\d/g)); // 1
// That’s because by default a caret ^ only matches at the beginning of the text, and in the multiline mode – at the start of any line.

// ❗❗❗“Start of a line” formally means “immediately after a line break”: the test ^ in multiline mode matches at all positions preceded by a newline character \n.
// And at the text start. ❗❗❗

// 🟢🟢 Searching at line end $ 🟢🟢

// The dollar sign $ behaves similarly.

// The regular expression \d$ finds the last digit in every line

let str2 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log(str2.match(/\d$/gm)); // 1,2,3

// ❗❗❗ “End of a line” formally means “immediately before a line break”: the test $ in multiline mode matches at all positions succeeded by a newline character \n.
// And at the text end. ❗❗❗
