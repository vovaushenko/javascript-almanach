//* The ESM format shares several similarities with the CommonJS format. ESM is file-based, and module instances are singletons, with everything private by default. One notable difference is that ESM files are assumed to be strict-mode, without needing a "use strict" pragma at the top. There's no way to define an ESM as non-strict-mode.

//! Instead of module.exports in CommonJS, ESM uses an export keyword to expose something on the public API of the module. The import keyword replaces the require(..) statement. Let's adjust "students.js" to use the ESM format:

export { getName };

// ************************

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

//* The only change here is the export { getName } statement. As before, export statements can appear anywhere throughout the file, though export must be at the top-level scope; it cannot be inside any other block or function.

//! ESM offers a fair bit of variation on how the export statements can be specified. For example:

export function getName(studentID) {
	// ..
}

// Another allowed variation:
export default function getName(studentID) {
	// ..
}

//* This is a so-called "default export," which has different semantics from other exports. In essence, a "default export" is a shorthand for consumers of the module when they import, giving them a terser syntax when they only need this single default API member.

// Non-default exports are referred to as "named exports."

//* The import keyword—like export, it must be used only at the top level of an ESM outside of any blocks or functions—also has a number of variations in syntax. The first is referred to as "named import":

//! Multiple API members can be listed inside the { .. } set, separated with commas. A named import can also be renamed with the as keyword:

// Suzy
//! By contrast, the other major variation on import is called "namespace import":
import * as Student from '/path/to/students.js';
import { getName as getStudentName } from '/path/to/students.js';

getStudentName(73);

Student.getName(73); // Suzy
