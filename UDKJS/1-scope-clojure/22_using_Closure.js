// For closure to be observed, a function must be invoked, and specifically it must be invoked in a different branch of the scope chain from where it was originally defined. A function executing in the same scope it was defined would not exhibit any observably different behavior with or without closure being possible; by the observational perspective and definition, that is not closure.

//⭐ Live Link, Not a Snapshot

/*
Closure is actually a live link, preserving access to the full variable itself. We're not limited to merely reading a value; the closed-over variable can be updated (re-assigned) as well! By closing over a variable in a function, we can keep using that variable (read and write) as long as that function reference exists in the program, and from anywhere we want to invoke that function. This is why closure is such a powerful technique used widely across so many areas of programming!
*/

function makeCounter() {
	let count = 0;
	return function counter() {
		count = count + 1;
		return count;
	};
}

let counter = makeCounter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3

//! Because it's so common to mistake closure as value-oriented instead of variable-oriented, developers sometimes get tripped up trying to use closure to snapshot-preserve a value from some moment in time. Consider:

var keeps = [];

for (var i = 0; i < 3; i++) {
	keeps[i] = function keepI() {
		// closure over `i`
		return i;
	};
}
//! with LET will be 0, 1, 2. Since three i's are created, one for each loop, so each of the three closures just work as expected.

console.log(keeps[0]()); // 3 -- WHY!?
keeps[1](); // 3
keeps[2](); // 3

//! Something about the structure of a for-loop can trick us into thinking that each iteration gets its own new i variable; in fact, this program only has one i since it was declared with var.

//* Each saved function returns 3, because by the end of the loop, the single i variable in the program has been assigned 3. Each of the three functions in the keeps array do have individual closures, but they're all closed over that same shared i variable.
