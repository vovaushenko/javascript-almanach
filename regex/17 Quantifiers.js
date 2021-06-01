// Let’s say we have a string like +7(903)-123-45-67 and want to find all numbers in it. But unlike before, we are interested not in single digits, but full numbers: 7, 903, 123, 45, 67.

// 🟢🟢 Quantity {n} 🟢🟢
// The simplest quantifier is a number in curly braces: {n}.
// A quantifier is appended to a character (or a character class, or a [...] set etc) and specifies how many we need.

// 1️⃣ The exact count: {5}

// \d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.

console.log("I'm 12345 years old".match(/\d{5}/)); //  "12345"
// We can add \b to exclude longer numbers: \b\d{5}\b.

// 2️⃣ The range: {3,5}, match 3-5 times
// To find numbers from 3 to 5 digits we can put the limits into curly braces: \d{3,5}

console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/)); // "1234"

// /We can omit the upper limit.

// Then a regexp \d{3,} looks for sequences of digits of length 3 or more:

// Let’s return to the string +7(903)-123-45-67.

// A number is a sequence of one or more digits in a row. So the regexp is \d{1,}:

let str = '+7(903)-123-45-67';
let numbers = str.match(/\d{1,}/g);
console.log(numbers);

//🟢🟢 Shorthands 🟢🟢

// There are shorthands for most used quantifiers:

// 1️⃣ +
// Means “one or more”, the same as {1,}.

// For instance, \d+ looks for numbers:

let str2 = '+7(903)-123-45-67';

console.log(str2.match(/\d+/g)); // 7,903,123,45,67
// 2️⃣ ?
// Means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional.

// For instance, the pattern ou?r looks for o followed by zero or one u, and then r.
// So, colou?r finds both color and colour:
let str3 = 'Should I write color or colour?';

console.log(str3.match(/colou?r/g)); // color, colou

// 3️⃣ *
// Means “zero or more”, the same as {0,}. That is, the character may repeat any times or be absent.

// For example, \d0* looks for a digit followed by any number of zeroes (may be many or none):

console.log('100 10 1'.match(/\d0*/g)); // 100, 10, 1

// 🟢🟢 More examples 🟢🟢

// 1️⃣ Regexp for decimal fractions (a number with a floating point): \d+\.\d+

console.log('0 1 12.345 7890'.match(/\d+\.\d+/g)); // 12.345

// 2️⃣Regexp for an “opening HTML-tag without attributes”, such as <span> or <p>.

// The simplest one: /<[a-z]+>/i

console.log('<body> ... </body>'.match(/<[a-z]+>/gi)); // <body>

// Improved: /<[a-z][a-z0-9]*>/i

console.log('<h1>Hi!</h1>'.match(/<[a-z][a-z0-9]*>/gi)); // <h1>
