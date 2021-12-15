/*
Recursion far predates JS, and so do these memory limitations. Back in the 1960s,
developers were wanting to use recursion and running up against hard limits of
device memory of their powerful computers that were far lower than we have on
our watches today.

Fortunately, a powerful observation was made in those early days that still offers
hope. The technique is called tail calls.

The idea is that if a call from function baz() to function bar() happens at the very
end of function baz() ’s execution – referred to as a tail call – the stack frame for
*/

/*
Tail calls really shine in the recursion case, because it means that a recursive stack
could run “forever”, and the only performance concern would be computation, not
fixed memory limitations. Tail call recursion can run in O(1) fixed memory usage.
*/

//! Proper Tail Calls (PTC)

/*
JavaScript has never required (nor forbidden) tail calls, until ES6. ES6 mandates
recognition of tail calls, of a specific form referred to as Proper Tail Calls (PTC),
and the guarantee that code in PTC form will run without unbounded stack memory
*/

//! Rearranging Recursion

/*
If you want to use recursion but your problem set could grow enough eventually
to exceed the stack limit of the JS engine, you’re going to need to rearrange your
recursive calls to take advantage of PTC (or avoid nested calls entirely). There are
several refactoring strategies that can help, but there are of course trade-offs to be
aware of.
*/
