// With awareness of the two-phase processing of a JS program (compile, then execute), let's turn our attention to how the JS engine identifies variables and determines the scopes of a program as it is compiled.

//* First, let's examine a simple JS program to use for analysis over the next several chapters:

var students = [
	{ id: 14, name: 'Kyle' },
	{ id: 73, name: 'Suzy' },
	{ id: 112, name: 'Frank' },
	{ id: 6, name: 'Sarah' },
];

function getStudentName(studentID) {
	for (let student of students) {
		if (student.id == studentID) {
			return student.name;
		}
	}
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
// Suzy

//! Other than declarations, all occurrences of variables/identifiers in a program serve in one of two "roles": either they're the target of an assignment or they're the source of a value.

// (When I first learned compiler theory while earning my computer science degree, we were taught the terms "LHS" (aka, target) and "RHS" (aka, source) for these roles, respectively. As you might guess from the "L" and the "R", the acronyms mean "Left-Hand Side" and "Right-Hand Side", as in left and right sides of an = assignment operator. However, assignment targets and sources don't always literally appear on the left or right of an =, so it's probably clearer to think in terms of target / source rather than left / right.)

//* How do you know if a variable is a target? Check if there is a value that is being assigned to it; if so, it's a target. If not, then the variable is a source.

//* ⭐ Targets

// !students = [ // .. This statement is clearly an assignment operation;

// But there are three other target assignment operations in the code that are perhaps less obvious. One of them:
//!for (let student of students) {  That statement assigns a value to student for each iteration of the loop.

//! Another target reference:  getStudentName(73)   - Look closely: the argument 73 is assigned to the parameter studentID.

// Did you identify this one?

//! function getStudentName(studentID) {

// You can think of it sort of like var getStudentName = function(studentID), but that's not exactly accurate. An identifier getStudentName is declared (at compile time), but the = function(studentID) part is also handled at compilation; the association between getStudentName and the function is automatically set up at the beginning of the scope rather than waiting for an = assignment statement to be executed.

//! This automatic association of function and variable is referred to as "function hoisting"
