//* Classic Module Definition
//! So to clarify what makes something a classic module:

//*1️⃣ There must be an outer scope, typically from a module factory function running at least once.

//*2️⃣ The module's inner scope must have at least one piece of hidden information that represents state for the module.

//*3️⃣ The module must return on its public API a reference to at least one function that has closure over the hidden module state (so that this state is actually preserved).

//! CommonJS modules behave as singleton instances, similar to the IIFE module definition style presented before. No matter how many times you require(..) the same module, you just get additional references to the single shared module instance.

/**
 *
 *
 *
 **   Node CommonJS Modules
 *
 *
 */

//!  CommonJS modules are file-based; one module per file.

module.exports.getName = getName;

var records = [
	{ id: 14, name: 'Kyle', grade: 86 },
	{ id: 73, name: 'Suzy', grade: 87 },
	{ id: 112, name: 'Frank', grade: 75 },
	{ id: 6, name: 'Sarah', grade: 91 },
];

function getName(studentID) {
	var student = records.find((student) => student.id == studentID);
	return student.name;
}

//* The records and getName identifiers are in the top-level scope of this module, but that's not the global scope (as explained in Chapter 4). As such, everything here is by default private to the module.

//* To expose something on the public API of a CommonJS module, you add a property to the empty object provided as module.exports. In some older legacy code, you may run across references to just a bare exports, but for code clarity you should always fully qualify that reference with the module. prefix.

//! Some developers have the habit of replacing the default exports object, like this:
// defining a new object for the API
module.exports = {
	// ..exports..
};

// There are some quirks with this approach, including unexpected behavior if multiple such modules circularly depend on each other. As such, I recommend against replacing the object. If you want to assign multiple exports at once, using object literal style definition, you can do this instead:

Object.assign(module.exports, {
	// .. exports ..
});

//* To include another module instance into your module/program, use Node's require(..) method. Assuming this module is located at "/path/to/student.js", this is how we can access it:

var Student = require('/path/to/student.js');
// require(..) is an all-or-nothing mechanism; it includes a reference of the entire exposed public API of the module. To effectively access only part of the API, the typical approach looks like this:
var getName = require('/path/to/student.js').getName;

// or alternately:

var { getName } = require('/path/to/student.js');
//! In Node require("student") statements, non-absolute paths ("student") assume a ".js" file extension and search "node_modules".
Student.getName(73);
// Suzy
