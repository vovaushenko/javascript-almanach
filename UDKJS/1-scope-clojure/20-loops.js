// Loops

//* Is value being "re-declared" repeatedly in this program? Will we get errors thrown? No.
var keepGoing = true;
while (keepGoing) {
	let value = Math.random();
	console.log(value);
	if (value > 0.5) {
		keepGoing = false;
	}
}

//! All the rules of scope (including "re-declaration" of let-created variables) are applied per scope instance. In other words, each time a scope is entered during execution, everything resets.

// Each loop iteration is its own new scope instance, and within each scope instance, value is only being declared once. So there's no attempted "re-declaration," and thus no error. Before we consider other loop forms, what if the value declaration in the previous snippet were changed to a var?

//* Is value being "re-declared" here, especially since we know var allows it? No. Because var is not treated as a block-scoping declaration (see Chapter 6), it attaches itself to the global scope. So there's just one value variable, in the same scope as keepGoing (global scope, in this case). No "re-declaration" here, either!
var keepGoing = true;
while (keepGoing) {
	var value = Math.random();
	console.log(value);
	if (value > 0.5) {
		keepGoing = false;
	}
}
