//! 🌛 I assert that hoisting should be used to refer to the compile-time operation of generating runtime instructions for the automatic registration of a variable at the beginning of its scope, each time that scope is entered.🌛

greeting = 'Hello!';
console.log(greeting);
// Hello!

var greeting = 'Howdy!';

// There's two necessary parts to the explanation:

//! the identifier is hoisted,
//! and it's automatically initialized to the value undefined from the top of the scope.
