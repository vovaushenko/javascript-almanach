//! 🌛 I assert that hoisting should be used to refer to the compile-time operation of generating runtime instructions for the automatic registration of a variable at the beginning of its scope, each time that scope is entered.🌛

//* Function hoisting only applies to formal function declarations (specifically those which appear outside of blocks—see "FiB" in Chapter 6), not to function expression assignments. Consider:

greeting();
//! TypeError  "'greeting' is not a function."

var greeting = function greeting() {
	console.log('Hello!');
};

//! ⭐⭐⭐ In addition to being hoisted, variables declared with var are also automatically initialized to undefined at the beginning of their scope—again, the nearest enclosing function, or the global. Once initialized, they're available to be used (assigned to, retrieved from, etc.) throughout the whole scope. ⭐⭐⭐

//* 🌟🌟🌟 A function declaration is hoisted and initialized to its function value (again, called function hoisting). A var variable is also hoisted, and then auto-initialized to undefined. Any subsequent function expression assignments to that variable don't happen until that assignment is processed during runtime execution. 🌟🌟🌟
