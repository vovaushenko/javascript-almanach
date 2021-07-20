//* Reviewing the JS environments we've looked at so far, a program may or may not:

//1️⃣  Declare a global variable in the top-level scope with var or function declarations—or let, const, and class.

//2️⃣ Also add global variables declarations as properties of the global scope object if var or function are used for the declaration.

//3️⃣ Refer to the global scope object (for adding or retrieving global variables, as properties) with window, self, or global.

//! Yet another "trick" for obtaining a reference to the global scope object looks like:

const theGlobalScopeObject = new Function('return this')();

//! A function can be dynamically constructed from code stored in a string value with the Function() constructor, similar to eval(..) (see "Cheating: Runtime Scope Modifications" in Chapter 1). Such a function will automatically be run in non-strict-mode (for legacy reasons) when invoked with the normal () function invocation as shown; its this will point at the global object. See the third book in the series, Objects & Classes, for more information on determining this bindings.

//* So, we have window, self, global, and this ugly new Function(..) trick. That's a lot of different ways to try to get at this global object. Each has its pros and cons.

//! Why not introduce yet another!?!?

//* As of ES2020, JS has finally defined a standardized reference to the global scope object, called globalThis. So, subject to the recency of the JS engines your code runs in, you can use globalThis in place of any of those other approaches.

//! We could even attempt to define a cross-environment polyfill that's safer across pre-globalThis JS environments, such as

const theGlobalScopeObject =
	typeof globalThis != 'undefined'
		? globalThis
		: typeof global != 'undefined'
		? global
		: typeof window != 'undefined'
		? window
		: typeof self != 'undefined'
		? self
		: new Function('return this')();
