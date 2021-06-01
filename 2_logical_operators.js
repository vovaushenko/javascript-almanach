// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

// || (OR)
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false
// 🟢🟢🟢OR "||" finds the first truthy value🟢🟢🟢
/////////////////////////////////////////////////////////////

// && (AND) In classical programming, AND returns true if both operands are truthy and false otherwise:
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
// 🟢🟢🟢AND “&&” finds the first falsy value🟢🟢🟢
/////////////////////////////////////////////////////////////

// ! (NOT)
console.log(!true); // false
console.log(!0); // true
// A double NOT !! is sometimes used for converting a value to boolean type:
alert(!!'non-empty string'); // true
alert(!!null); // false
