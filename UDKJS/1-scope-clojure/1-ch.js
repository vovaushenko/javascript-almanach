// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md

// JS is typically classified as an interpreted scripting language, so it's assumed by most that JS programs are processed in a single, top-down pass. ❗❗❗But JS is in fact parsed/compiled in a separate phase before execution begins.❗❗❗

// ⭐CLOJURE
// 🟢🟢🟢JS functions are themselves first-class values; they can be assigned and passed around just like numbers or strings. But since these functions hold and access variables, they maintain their original scope no matter where in the program the functions are eventually executed. This is called closure.🟢🟢🟢

//* Compiled vs. Interpreted
// Code compilation is a set of steps that process the text of your code and turn it into a list of instructions the computer can understand. Typically, the whole source code is transformed at once, and those resulting instructions are saved as output (usually in a file) that can later be executed.

// Interpretation performs a similar task to compilation, in that it transforms your program into machine-understandable instructions. But the processing model is different. Unlike a program being compiled all at once, with interpretation the source code is transformed line by line; each line or statement is executed before immediately proceeding to processing the next line of the source code.

// ⭐ Our conclusion there is that JS is most accurately portrayed as a compiled language. ⭐

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*  Compiling Code

// In classic compiler theory, a program is processed by a compiler in three basic stages:

//1️⃣ Tokenizing/Lexing: breaking up a string of characters into meaningful (to the language) chunks, called tokens. For instance, consider the program: var a = 2;. This program would likely be broken up into the following tokens: var, a, =, 2, and ;
// 2️⃣ Parsing: taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This is called an Abstract Syntax Tree (AST).
// 3️⃣Code Generation: taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, and other factors.

// JS engines don't have the luxury of an abundance of time to perform their work and optimizations, because JS compilation doesn't happen in a build step ahead of time, as with other languages. It usually must happen in mere microseconds (or less!) right before the code is executed. To ensure the fastest performance under these constraints, JS engines use all kinds of tricks (like JITs, which lazy compile and even hot re-compile); these are well beyond the "scope" of our discussion here.

//* Required: Two Phases
// To state it as simply as possible, the most important observation we can make about processing of JS programs is that it occurs in (at least) two phases: parsing/compilation first, then execution.

//*There are three program characteristics you can observe to prove this to yourself: syntax errors, early errors, and hoisting.

//! 1️⃣ Syntax Errors from the Start
/*

var greeting = "Hello";

console.log(greeting);   // will not be printed Unexpected Token

greeting = ."Hi"; 
*/
//! 2️⃣ Early Errors

console.log('Howdy'); //! will NOT BE PRINTED

saySomething('Hello', 'Hi');
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

function saySomething(greeting, greeting) {
	'use strict';
	console.log(greeting);
}

//! 3️⃣ Hoisting

function saySomething() {
	var greeting = 'Hello';
	{
		greeting = 'Howdy'; // error comes from here
		let greeting = 'Hi';
		console.log(greeting);
	}
}

saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization

//* Hopefully you're now convinced that JS programs are parsed before any execution begins. But does it prove they are compiled?

//! Classifying JS as a compiled language is not concerned with the distribution model for its binary (or byte-code) executable representations, but rather in keeping a clear distinction in our minds about the phase where JS code is processed and analyzed; this phase observably and indisputably happens before the code starts to be executed.
