// The iterator pattern defines a data structure called an "iterator" that has a reference to an underlying data source (like the query result rows), which exposes a method like next(). Calling next() returns the next piece of data (i.e., a "record" or "row" from a database query).

/*
After many years of various JS community efforts around mutually agreed-upon iteration techniques, ES6 standardized a specific protocol for the iterator pattern directly in the language. The protocol defines a next() method whose return is an object called an iterator result; the object has value and done properties, where done is a boolean that is false until the iteration over the underlying data source is complete.
*/

// 🟢 Consuming Iterators 🟢

//With the ES6 iteration protocol in place, it's workable to consume a data source one value at a time, checking after each next() call for done to be true to stop the iteration. But this approach is rather manual, so ES6 also included several mechanisms (syntax and APIs) for standardized consumption of these iterators.

// 1️⃣ One such mechanism is the for..of loop:
// loop over its results one at a time
for (let val of it) {
	console.log(`Iterator value: ${val}`);
}

// 2️⃣ Another mechanism that's often used for consuming iterators is the ... operator. This operator actually has two symmetrical forms: spread and rest (or gather, as I prefer). The spread form is an iterator-consumer.

// An array spread:
// spread an iterator into an array,
// with each iterated value occupying
// an array element position.
var vals = [...it];
doSomethingUseful(...it);
// In both cases, the iterator-spread form of ... follows the iterator-consumption protocol (the same as the for..of loop) to retrieve all available values from an iterator and place (aka, spread) them into the receiving context (array, argument list).
