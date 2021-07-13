// But functions also have another characteristic besides their scope that influences what they can access. This characteristic is best described as an execution context, and it's exposed to the function via its this keyword.

// 🟢Scope is static and contains a fixed set of variables available at the moment and location you define a function, but a function's execution context is dynamic, entirely dependent on how it is called (regardless of where it is defined or even called from).

//! this is not a fixed characteristic of a function based on the function's definition, but rather a dynamic characteristic that's determined each time the function is called.

//* One way to think about the execution context is that it's a tangible object whose properties are made available to a function while it executes.
// Compare that to scope, which can also be thought of as an object; except, the scope object is hidden inside the JS engine, it's always the same for that function, and its properties take the form of identifier variables available inside the function.

function classroom(teacher) {
	return function study() {
		console.log(`${teacher} says to study ${this.topic}`);
	};
}
var assignment = classroom('Kyle');

console.log(assignment()); //Kyle says to study undefined

const homework = {
	topic: 'JS',
	assignment: assignment,
};

homework.assignment();
// A copy of the assignment function reference is set as a property on the homework object, and then it's called as homework.assignment(). That means the this for that function call will be the homework object. Hence, this.topic resolves to "JS".

let otherHomework = { topic: 'Computer Science' };
assignment.call(otherHomework);
// A third way to invoke a function is with the call(..) method, which takes an object (otherHomework here) to use for setting the this reference for the function call. The property reference this.topic resolves to "Math".
