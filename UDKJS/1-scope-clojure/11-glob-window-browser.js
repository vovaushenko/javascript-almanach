//* Where Exactly is this Global Scope?

// It might seem obvious that the global scope is located in the outermost portion of a file; that is, not inside any function or other block. But it's not quite as simple as that.

//* ⭐ Browser "Window" ////////////////////////////////////////////////////////////////////////
// With respect to treatment of the global scope, the most pure environment JS can be run in is as a standalone .js file loaded in a web page environment in a browser.

var studentName = 'Kyle';

function hello() {
	console.log(`Hello, ${studentName}!`);
}

hello();
// Hello, Kyle!

// This code may be loaded in a web page environment using an inline <script> tag, a <script src=..> script tag in the markup, or even a dynamically created <script> DOM element. In all three cases, the studentName and hello identifiers are declared in the global scope.

//! That means if you access the global object (commonly, window in the browser), you'll find properties of those same names there:
var studentName = 'Kyle';

function hello() {
	console.log(`Hello, ${window.studentName}!`);
}

window.hello();
// Hello, Kyle!

// That's what I mean by pure. But unfortunately, that won't always be true of all JS environments you encounter, and that's often surprising to JS developers.

//*⭐ Globals Shadowing Globals ////////////////////////////////////////////////////////////////////////

// An unusual consequence of the difference between a global variable and a global property of the same name is that, within just the global scope itself, a global object property can be shadowed by a global variable:

window.something = 42;

let something = 'Kyle';

console.log(something);
// Kyle

console.log(window.something);
// 42

//! A simple way to avoid this gotcha with global declarations: always use var for globals. Reserve let and const for block scopes (see "Scoping with Blocks" in Chapter 6).

//*⭐ DOM Globals ////////////////////////////////////////////////////////////////////////

// I asserted that a browser-hosted JS environment has the most pure global scope behavior we'll see. However, it's not entirely pure.

// One surprising behavior in the global scope you may encounter with browser-based JS applications: a DOM element with an id attribute automatically creates a global variable that references it.

<ul id="my-todo-list">
	<li id="first">Write a book</li>
	..
</ul>;
// And the JS for that page could include:
first;
// <li id="first">..</li>

window['my-todo-list'];
// <ul id="my-todo-list">..</ul>
//! If the id value is a valid lexical name (like first), the lexical variable is created. If not, the only way to access that global is through the global object (window[..]).

//*⭐ What's in a (Window) Name ////////////////////////////////////////////////////////////////////////

// Another global scope oddity in browser-based JS:
var name = 42;

console.log(name, typeof name); //! "42" STRING

//! window.name is a pre-defined "global" in a browser context; it's a property on the global object, so it seems like a normal global variable (yet it's anything but "normal").

//* But the truly surprising behavior is that even though we assigned the number 42 to name (and thus window.name), when we then retrieve its value, it's a string "42"! In this case, the weirdness is because name is actually a pre-defined getter/setter on the window object, which insists on its value being a string value. Yikes!
