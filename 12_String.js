// πππ   Searching for a substring  πππ

let str1 = 'Widget with id';
console.log(str1.indexOf('id', 2)); //optional argument where to start

// all occurances in string
let str = 'As sly as a fox, as strong as an ox';
let target = 'as';

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

// str.lastIndexOf(substr, position)

// πππ includes, startsWith, endsWithπππ

console.log('Widget'.includes('id')); // true
console.log('Widget'.includes('id', 3)); // false, from position 3 there is no "id"
'Widget'.startsWith('Wid');
'Widget'.endsWith('get');

//  πππ Getting a substringπππ
let str3 = 'stringify';

console.log(str3.slice(0, 5)); //  '"strin'
console.log(str3.slice(2)); //ringify

// str.substring(start [, end])

let str4 = 'stringify';
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// πππ  Correct comparisons πππ

str.localeCompare(str2);
// Returns a negative number if str is less than str2.
// Returns a positive number if str is greater than str2.
// Returns 0 if they are equivalent.
