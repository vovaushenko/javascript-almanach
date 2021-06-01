// As mentioned previously, regular expressions are integrated with string methods.

// The method str.match(regexp) finds all matches of regexp in the string str.

// ❗❗❗ It has 3 working modes: ❗❗❗

/*
     1️⃣  If the regular expression has flag g, it returns an array of all matches
*/

let str = 'We will, we will rock you';

console.log(str.match(/we/gi)); // [ 'We', 'we' ]
// Please note that both We and we are found, because flag i makes the regular expression case-insensitive.

/*
     2️⃣  If there’s no such flag it returns only the first match in the form of an array, with the full match at index 0 and some additional details in properties:
*/

let result = str.match(/we/i); //no g flag
console.log(result);
/*
[
  'We',
  index: 0,
  input: 'We will, we will rock you',
  groups: undefined
]
*/

/*
     3️⃣  And, finally, if there are no matches, null is returned (doesn’t matter if there’s flag g or not).
*/

let matches = 'JavaScript'.match(/HTML/); // = null
let matches2 = 'JavascriptAndHtml'.match(/htMl/i);
console.log(matches);
console.log(matches2);
