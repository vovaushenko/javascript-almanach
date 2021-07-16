// In Chapter 1, we explored how scope is determined during code compilation, a model called "lexical scope." The term "lexical" refers to the first stage of compilation (lexing/parsing).

// This chapter will illustrate scope with several metaphors. The goal here is to think about how your program is handled by the JS engine in ways that more closely align with how the JS engine actually works.

//! outer/global scope: RED

var students = [
	{ id: 14, name: 'Kyle' },
	{ id: 73, name: 'Suzy' },
	{ id: 112, name: 'Frank' },
	{ id: 6, name: 'Sarah' },
];

function getStudentName(studentID) {
	//! function scope: BLUE

	for (let student of students) {
		//! loop scope: GREEN

		if (student.id == studentID) {
			return student.name;
		}
	}
}

var nextStudent = getStudentName(73);
console.log(nextStudent); //! Suzy

// Bubble 1 (RED) encompasses the global scope, which holds three identifiers/variables: students (line 1), getStudentName (line 8), and nextStudent (line 16).

// Bubble 2 (BLUE) encompasses the scope of the function getStudentName(..) (line 8), which holds just one identifier/variable: the parameter studentID (line 8).

// Bubble 3 (GREEN) encompasses the scope of the for-loop (line 9), which holds just one identifier/variable: student (line 9).

//* Scope bubbles are determined during compilation based on where the functions/blocks of scope are written, the nesting inside each other, and so on. Each scope bubble is entirely contained within its parent scope bubble—a scope is never partially in two different outer scopes.

//! An expression in the RED(1) bucket only has access to RED(1) marbles, not BLUE(2) or GREEN(3). An expression in the BLUE(2) bucket can reference either BLUE(2) or RED(1) marbles, not GREEN(3). And an expression in the GREEN(3) bucket has access to RED(1), BLUE(2), and GREEN(3) marbles.

//! The key take-aways from marbles & buckets (and bubbles!):

//1️⃣ Variables are declared in specific scopes, which can be thought of as colored marbles from matching-color buckets.

//2️⃣ Any variable reference that appears in the scope where it was declared, or appears in any deeper nested scopes, will be labeled a marble of that same color—unless an intervening scope "shadows" the variable declaration; see "Shadowing" in Chapter 3.

//3️⃣ The determination of colored buckets, and the marbles they contain, happens during compilation. This information is used for variable (marble color) "lookups" during code execution.

//! Lookup Failures
// When Engine exhausts all lexically available scopes (moving outward) and still cannot resolve the lookup of an identifier, an error condition then exists. However, depending on the mode of the program (strict-mode or not) and the role of the variable (i.e., target vs. source; see Chapter 1), this error condition will be handled differently.

// To perpetuate the confusion even further, JS's typeof operator returns the string "undefined" for variable references in either state:
var studentName;
typeof studentName; // "undefined"

typeof doesntExist; // "undefined"

function getStudentName() {
	// assignment to an undeclared variable :(
	nextStudent = 'Suzy';
}

getStudentName();

console.log(nextStudent);
// "Suzy" -- oops, an accidental-global variable!

/*
Here's how that conversation will proceed:

Engine: Hey, Scope Manager (for the function), I have a target reference for nextStudent, ever heard of it?

(Function) Scope Manager: Nope, never heard of it. Try the next outer scope.

Engine: Hey, Scope Manager (for the global scope), I have a target reference for nextStudent, ever heard of it?

(Global) Scope Manager: Nope, but since we're in non-strict-mode, I helped you out and just created a global variable for you, here it is!
*/
