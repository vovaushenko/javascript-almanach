// π’π’π’More ways to write a numberπ’π’π’

let billion = 1000000000;
billion = 1_000_000_000;
billion = 1e9; // all the same
let bignum = 7.3e9; // 7,3 billions

// small
let ms = 1e-6;
let ms1 = 1e-3; // 1 / 1000

//  π’π’π’ toString(base) π’π’π’
// The method num.toString(base) returns a string representation of num in the numeral system with the given base

let num = 255;
console.log(num.toString(16)); //ff
console.log(num.toString(2)); //11111111
console.log((123456).toString(36)); // 2n9c

//    π’π’π’ Imprecise calculations π’π’π’

console.log(1e500); // Infinity
console.log(0.1 + 0.2);
// solution
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2));

// self increasing number
console.log(9999999999999999); //shows 10000000000000000

// π’π’π’Tests: isFinite and isNaN π’π’π’

console.log(isNaN(NaN));
console.log(isNaN('cool'));
console.log(isNaN(5));

console.log(NaN === NaN); // π’π’π’FALSE π’π’π’

console.log(isFinite(15)); //true
console.log(isFinite('str')); //false
console.log(isFinite(Infinity)); //false

// π’π’π’ parseInt and parseFloat π’π’π’
console.log(parseInt('100px'));
console.log(parseInt('100px'));
console.log(parseFloat('10.5px'));
console.log(parseFloat('12.3.4')); //12.3
console.log(parseInt('a123')); //NaN

// The second argument of parseInt(str, radix)
console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('2n9c', 36)); // 123456
