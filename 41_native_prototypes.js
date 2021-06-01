let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

//   🟢🟢🟢   Other built-in prototypes   🟢🟢🟢
// Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.

let arr = [1, 2, 3];
// it inherits from Array.prototype?
console.log(arr.__proto__ === Array.prototype); // true

// then from Object.prototype?
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
console.log(arr.__proto__.__proto__.__proto__); // null

// 🟢🟢🟢   Changing native prototypes  🟢🟢🟢

String.prototype.prop = 'hey';
String.prototype.show = function () {
  console.log(this);
};

'BOOM'.show();
console.log('BOOM'.prop);
// ❗❗❗❗❗❗In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.❗❗❗❗❗❗

//   🟢🟢🟢  Borrowing from prototypes  🟢🟢🟢

let object = {
  0: 'hello',
  1: 'world!',
  length: 2,
};

// object.join = Array.prototype.join;
// borrow all the props
object.__proto__ = Array.prototype;

console.log(object.join(','));
console.log(object.filter((val) => val === 'hello'));
console.log(object.map((val) => 'cool'));
console.log(object);
