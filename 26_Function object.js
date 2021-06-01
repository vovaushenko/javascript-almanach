// As we already know, a function in JavaScript is a value.

// Every value in JavaScript has a type. What type is a function?

// In JavaScript, functions are objects.

// 🟢🟢🟢    The “name” property    🟢🟢🟢
function sayHi() {
  console.log('hi');
}

console.log(sayHi.name); //sayHi

// Object methods have names too:

const user = {
  sayHi() {},
  sayBye() {},
};

console.log(user.sayBye.name);
console.log(user.sayHi.name);

// 🟢🟢🟢 The “length” property 🟢🟢🟢
function f1(a) {}
function f2(a, b, c) {}

console.log(f1.length); // 1
console.log(f2.length); //  3

//  🟢🟢🟢  Custom properties 🟢🟢🟢

function sayHello() {
  sayHello.counter++;
  if (sayHello.counter > 2) console.log('hey 2');
  console.log('Hello there!');
}

sayHello.counter = 0;
sayHello();
sayHello();
sayHello();
console.log(`Called ${sayHello.counter} times!`);
