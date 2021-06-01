// https://javascript.info/types

//Javascript is dynamically-typed
let message = 'Hi';
message = 12345;
message = null;

// 1) Number
let n = 123;
n = 12.345;
console.log(1 / 0); //Infinity
console.log('hey' * 2); //NaN
console.log('hey' / 2); //NaN

// 2) Bigint
// In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991)
const bigInt = 1234567890123456789012345678901234567890n;

// 3) String
let hi = 'hi';
hi = `${123 * 41} times hello`;

// 4) Boolean
// used to store yes/no
let hasAdditionalRequirements = true;
let isGreaterThanThree = 3 > 1;

//5) The Null value -> value is 🟢UNKNOWN🟢
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let age = null;

// 6) Undefined -> values is 🟢NOT ASSIGNED🟢
let age1;
// we cand do
age1 = undefined; //but this is no recomended

// Objects && Symbols

// The symbol type is used to create unique identifiers for objects.
