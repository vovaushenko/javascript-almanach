//! Cheating: Runtime Scope Modifications

// It should be clear by now that scope is determined as the program is compiled, and should not generally be affected by runtime conditions. However, in non-strict-mode, there are technically still two ways to cheat this rule, modifying a program's scopes during runtime.

// Neither of these techniques should be used—they're both dangerous and confusing, and you should be using strict-mode (where they're disallowed) anyway. But it's important to be aware of them in case you run across them in some programs.

//* The eval(..) function receives a string of code to compile and execute on the fly during the program runtime. If that string of code has a var or function declaration in it, those declarations will modify the current scope that the eval(..) is currently executing in:

function badIdea() {
	eval("var oops = 'Ugh!';");
	console.log(oops);
}
badIdea(); // Ugh!
// If the eval(..) had not been present, the oops variable in console.log(oops) would not exist, and would throw a ReferenceError. But eval(..) modifies the scope of the badIdea() function at runtime. This is bad for many reasons, including the performance hit of modifying the already compiled and optimized scope, every time badIdea() runs.

//! The second cheat is the with keyword, which essentially dynamically turns an object into a local scope—its properties are treated as identifiers in that new scope's block:

var badIdea = { oops: 'Ugh!' };

with (badIdea) {
	console.log(oops); // Ugh!
}
