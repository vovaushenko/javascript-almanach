// Where having different lexical scope buckets starts to matter more is when you have two or more variables, each in different scopes, with the same lexical names. A single scope cannot have two or more variables with the same name; such multiple references would be assumed as just one variable.var studentName = "Suzy";

var studentName = 'Suzy';

function printStudent(studentName) {
	studentName = studentName.toUpperCase();
	console.log(studentName);
}

printStudent('Frank');
// FRANK

printStudent(studentName);
// SUZY

console.log(studentName);
// Suzy

//! With the conceptual notion of the "lookup," we asserted that it starts with the current scope and works its way outward/upward, stopping as soon as a matching variable is found. The BLUE(2) studentName is found right away. The RED(1) studentName is never even considered.

//* This is a key aspect of lexical scope behavior, called shadowing. The BLUE(2) studentName variable (parameter) shadows the RED(1) studentName. So, the parameter is shadowing the (shadowed) global variable. Repeat that sentence to yourself a few times to make sure you have the terminology straight!
