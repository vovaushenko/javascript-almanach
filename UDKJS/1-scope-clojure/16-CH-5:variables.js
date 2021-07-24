//! 🌛 I assert that hoisting should be used to refer to the compile-time operation of generating runtime instructions for the automatic registration of a variable at the beginning of its scope, each time that scope is entered.🌛

//! When Can I Use a Variable?

//* At what point does a variable become available to use within its scope? There may seem to be an obvious answer: after the variable has been declared/created. Right? Not quite.

greeting();
// Hello!

function greeting() {
	console.log('Hello!');
}

//* But hoisting alone doesn't fully answer the question. We can see an identifier called greeting from the beginning of the scope, but why can we call the greeting() function before it's been declared?

// !⭐⭐⭐⭐⭐ In other words, how does the variable greeting have any value (the function reference) assigned to it, from the moment the scope starts running? The answer is a special characteristic of formal function declarations, called function hoisting. When a function declaration's name identifier is registered at the top of its scope, it's additionally auto-initialized to that function's reference. That's why the function can be called throughout the entire scope!⭐⭐⭐⭐

//!⭐⭐⭐⭐ One key detail is that both function hoisting and var-flavored variable hoisting attach their name identifiers to the nearest enclosing function scope (or, if none, the global scope), not a block scope.⭐⭐⭐⭐
