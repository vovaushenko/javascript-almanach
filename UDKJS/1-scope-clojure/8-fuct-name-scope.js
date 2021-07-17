// As you've seen by now, a function declaration looks like this:
function askQuestion() {
	// ..
}
// And as discussed in Chapters 1 and 2, such a function declaration will create an identifier in the enclosing scope (in this case, the global scope) named askQuestion.

//! What about this program?
var askQuestion = function () {
	// ..
};
//* The same is true for the variable askQuestion being created. But since it's a function expression—a function definition used as value instead of a standalone declaration—the function itself will not "hoist" (see Chapter 5).

//! One major difference between function declarations and function expressions is what happens to the name identifier of the function. Consider a named function expression:

var askQuestion = function ofTheTeacher() {
	// ..
};
// We know askQuestion ends up in the outer scope. But what about the ofTheTeacher identifier? For formal function declarations, the name identifier ends up in the outer/enclosing scope, so it may be reasonable to assume that's the case here. But ofTheTeacher is declared as an identifier inside the function itself:
askQuestion();
// function ofTheTeacher()...

console.log(ofTheTeacher);
// ReferenceError: ofTheTeacher is not defined

//! Not only is ofTheTeacher declared inside the function rather than outside, but it's also defined as read-only:
var askQuestion = function ofTheTeacher() {
	'use strict';
	ofTheTeacher = 42; // TypeError

	//..
};

askQuestion();
// TypeError
