/*
Value immutability is not about unchanging values. It’s about creating and tracking
new values as the state of the program changes, rather than mutating existing values.
This approach leads to more confidence in reading the code, because we limit the
places where our state can change in ways we don’t readily see or expect.

const declarations (constants) are commonly mistaken for their ability to signal
intent and enforce immutability. In reality, const has basically nothing to do with
value immutability, and its usage will likely create more confusion than it solves.
Instead, Object.freeze(..) provides a nice built-in way of setting shallow value
immutability on an array or object. In many cases, this will be sufficient.
*/

/*
! Primitive Immutability
*/
// Values of the primitive types ( number , string , boolean , null , and undefined ) are
// already immutable; there’s nothing you can do to change them:

/*
However, JS does have a peculiar behavior which seems like it allows mutating such
primitive type values: “boxing”. When you access a property on certain primitive
type values – specifically number , string , and boolean – under the covers JS
automatically wraps (aka “boxes”) the value in its object counterpart ( Number ,
String , and Boolean , respectively).
*/

var x = 2;
x.length = 4;
console.log(x.length); //undefined

//! What if you try to mutate the explicitly boxed object representation of such a value?

const y = new Number(2);

y.length = 'foo';
console.log(y.length);

//!Non-Local

// Non-primitive values are held by reference, and when passed as arguments, it’s the
// reference that’s copied, not the value itself.
/*

  If you have an object or array in one part of the program, and pass it to a function
  that resides in another part of the program, that function can now affect the value
  via this reference copy, mutating it in possibly unexpected ways.
  In other words, if passed as arguments, non-primitive values become non-local.
  Potentially the entire program has to be considered to understand whether such a
  value will be changed or not.
*/

//! It’s Freezing in Here

/*
There’s a cheap and simple way to turn a mutable object/array/function into an
“immutable value” (of sorts):
*/

const arr = Object.freeze([2]);

console.log(arr);

//* BUT
var fr = Object.freeze([2, 3, [4, 5]]);
// not allowed:
fr[0] = 42;
// oops, still allowed:
fr[2][0] = 42;

console.log(fr);
