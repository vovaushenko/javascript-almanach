// Code blocks
// If a variable is declared inside a code block {...}, it’s only visible inside that block.

{
  let a = 5;
  console.log(a);
}

// We can use this to isolate a piece of code that does its own task, with variables that only belong to it:

{
  let message = 'Hello';
  console.log(message);
}

{
  let message = 'Goodbye';
  console.log(message);
}

// Nested functions

function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + ' ' + lastName;
  }

  console.log('Hello, ' + getFullName());
  console.log('Bye, ' + getFullName());
}

// What’s much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
