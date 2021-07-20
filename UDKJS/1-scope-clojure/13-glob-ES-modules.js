//* ES6 introduced first-class support for the module pattern (covered in Chapter 8). One of the most obvious impacts of using ESM is how it changes the behavior of the observably top-level scope in a file.

var studentName = 'Kyle';

function hello() {
	console.log(`Hello, ${studentName}!`);
}

hello();
// Hello, Kyle!

export { hello };

//* If that code is in a file that's loaded as an ES module, it will still run exactly the same. However, the observable effects, from the overall application perspective, will be different.

//! Despite being declared at the top level of the (module) file, in the outermost obvious scope, studentName and hello are not global variables. Instead, they are module-wide, or if you prefer, "module-global."

//* The module's top-level scope is descended from the global scope, almost as if the entire contents of the module were wrapped in a function. Thus, all variables that exist in the global scope (whether they're on the global object or not!) are available as lexical identifiers from inside the module's scope.

//! ESM encourages a minimization of reliance on the global scope, where you import whatever modules you may need for the current module to operate. As such, you less often see usage of the global scope or its global object.
