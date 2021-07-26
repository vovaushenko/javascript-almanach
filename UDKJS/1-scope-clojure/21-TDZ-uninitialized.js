// With var declarations, the variable is "hoisted" to the top of its scope. But it's also automatically initialized to the undefined value, so that the variable can be used throughout the entire scope.

console.log(studentName);
// ReferenceError

let studentName = 'Suzy';

//! Oops. We still get the ReferenceError, but now on the first line where we're trying to assign to (aka, initialize!) this so-called "uninitialized" variable studentName. What's the deal!?
studentName = 'Suzy'; // let's try to initialize it!
// ReferenceError

console.log(studentName);

let studentName;

//* The real question is, how do we initialize an uninitialized variable? For let/const, the only way to do so is with an assignment attached to a declaration statement. An assignment by itself is insufficient! Consider:
let studentName = 'Suzy';
console.log(studentName);

//!That's interesting! Recall from earlier, we said that var studentName; is not the same as var studentName = undefined;, but here with let, they behave the same. The difference comes down to the fact that var studentName automatically initializes at the top of the scope, where let studentName does not.

//* So if we analyze what's going on here, we see that an additional nuance is that Compiler is also adding an instruction in the middle of the program, at the point where the variable studentName was declared, to handle that declaration's auto-initialization. We cannot use the variable at any point prior to that initialization occuring. The same goes for const as it does for let.

//! The term coined by TC39 to refer to this period of time from the entering of a scope to where the auto-initialization of the variable occurs is: Temporal Dead Zone (TDZ).

//* The TDZ is the time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way. Only the execution of the instructions left by Compiler at the point of the original declaration can do that initialization. After that moment, the TDZ is done, and the variable is free to be used for the rest of the scope.

//! A var also has technically has a TDZ, but it's zero in length and thus unobservable to our programs! Only let and const have an observable TDZ.

//!The actual difference is that let/const declarations do not automatically initialize at the beginning of the scope, the way var does. The debate then is if the auto-initialization is part of hoisting, or not? I think auto-registration of a variable at the top of the scope (i.e., what I call "hoisting") and auto-initialization at the top of the scope (to undefined) are distinct operations and shouldn't be lumped together under the single term "hoisting."
