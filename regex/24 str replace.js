// ⭐⭐⭐⭐  4️⃣ str.replace(str|regexp, str|func) ⭐⭐⭐⭐

// This is a generic method for searching and replacing, one of most useful ones. The swiss army knife for searching and replacing.

// replace all dashes by a colon
console.log('12-34-56'.replace(/-/g, ':')); // 12:34:56

// The second argument is a replacement string. We can use special characters in it:

// Symbols	Action in the replacement string
// $&	inserts the whole match
// $`	inserts a part of the string before the match
// $'	inserts a part of the string after the match
// $n	if n is a 1-2 digit number, inserts the contents of n-th capturing group, for details see Capturing groups
// $<name>	inserts the contents of the parentheses with the given name, for details see Capturing groups
// $$	inserts character $

// ❗❗❗ For situations that require “smart” replacements, the second argument can be a function.

// It will be called for each match, and the returned value will be inserted as a replacement.

// The function is called with arguments func(match, p1, p2, ..., pn, offset, input, groups):

// match – the match,
// p1, p2, ..., pn – contents of capturing groups (if there are any),
// offset – position of the match,
// input – the source string,
// groups – an object with named groups.

// If there are no parentheses in the regexp, then there are only 3 arguments: func(str, offset, input).

// For example, let’s uppercase all matches:

let str = 'html and css';

let result = str.replace(/html|css/gi, (str) => str.toUpperCase());

console.log(result); // HTML and CSS

let str2 = '1 2 3 4 5 6';

let doubledStr = str2.replace(/\d/g, (s) => +s * 2);
console.log(doubledStr);

// If there are many groups, it’s convenient to use rest parameters to access them:

let str3 = 'John Smith';

let res3 = str3.replace(
	/(\w+) (\w+)/,
	(...match) => `${match[2]}, ${match[1]}`
);

console.log(res3); // Smith, John

// Or, if we’re using named groups, then groups object with them is always the last, so we can obtain it like this:
let str4 = 'John Smith';

let res4 = str4.replace(/(?<name>\w+) (?<surname>\w+)/, (...match) => {
	let groups = match.pop();

	return `${groups.surname}, ${groups.name}`;
});

console.log(res4); // Smith, John
