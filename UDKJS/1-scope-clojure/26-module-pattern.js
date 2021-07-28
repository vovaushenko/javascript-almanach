//* Encapsulation and Least Exposure (POLE)

//! Encapsulation is often cited as a principle of object-oriented (OO) programming, but it's more fundamental and broadly applicable than that. The goal of encapsulation is the bundling or co-location of information (data) and behavior (functions) that together serve a common purpose.

// Independent of any syntax or code mechanisms, the spirit of encapsulation can be realized in something as simple as using separate files to hold bits of the overall program with common purpose. If we bundle everything that powers a list of search results into a single file called "search-list.js", we're encapsulating that part of the program.

// The recent trend in modern front-end programming to organize applications around Component architecture pushes encapsulation even further. For many, it feels natural to consolidate everything that constitutes the search results list—even beyond code, including presentational markup and styling—into a single unit of program logic, something tangible we can interact with. And then we label that collection the "SearchList" component.

//! The idea is to group alike program bits together, and selectively limit programmatic access to the parts we consider private details. What's not considered private is then marked as public, accessible to the whole program.

/**
 *
 * * ⭐ What Is a Module? ⭐
 * */

//! A module is a collection of related data and functions (often referred to as methods in this context), characterized by a division between hidden private details and public accessible details, usually called the "public API."

//* To get a better sense of what a module is, let's compare some module characteristics to useful code patterns that aren't quite modules.

//* 1️⃣  Namespaces (Stateless Grouping)

// If you group a set of related functions together, without data, then you don't really have the expected encapsulation a module implies. The better term for this grouping of stateless functions is a namespace:

// namespace, not module
var Utils = {
	cancelEvt(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();
	},
	wait(ms) {
		return new Promise(function c(res) {
			setTimeout(res, ms);
		});
	},
	isValidEmail(email) {
		return /[^@]+@[^@.]+\.[^@.]+/.test(email);
	},
};

//* 2️⃣ Data Structures (Stateful Grouping)
// data structure, not module
var Student = {
	records: [
		{ id: 14, name: 'Kyle', grade: 86 },
		{ id: 73, name: 'Suzy', grade: 87 },
		{ id: 112, name: 'Frank', grade: 75 },
		{ id: 6, name: 'Sarah', grade: 91 },
	],
	getName(studentID) {
		var student = this.records.find((student) => student.id == studentID);
		return student.name;
	},
};
// Since records is publicly accessible data, not hidden behind a public API, Student here isn't really a module.

// Student does have the data-and-functionality aspect of encapsulation, but not the visibility-control aspect. It's best to label this an instance of a data structure.
Student.getName(73);
// Suzy

/**
 *
 * *3️⃣ Modules (Stateful Access Control)
 * */
// To embody the full spirit of the module pattern, we not only need grouping and state, but also access control through visibility (private vs. public).

// Let's turn Student from the previous section into a module. We'll start with a form I call the "classic module," which was originally referred to as the "revealing module" when it first emerged in the early 2000s. Consider:

//! I should point out that the explicit student data being hard-coded into this module definition is just for our illustration purposes. A typical module in your program will receive this data from an outside source, typically loaded from databases, JSON data files, Ajax calls, etc. The data is then injected into the module instance typically through method(s) on the module's public API.

var Student = (function defineStudent() {
	var records = [
		{ id: 14, name: 'Kyle', grade: 86 },
		{ id: 73, name: 'Suzy', grade: 87 },
		{ id: 112, name: 'Frank', grade: 75 },
		{ id: 6, name: 'Sarah', grade: 91 },
	];

	var publicAPI = {
		getName,
	};

	return publicAPI;

	// ************************

	function getName(studentID) {
		var student = records.find((student) => student.id == studentID);
		return student.name;
	}
})();
//! Notice that the instance of the module is created by the defineStudent() IIFE being executed. This IIFE returns an object (named publicAPI) that has a property on it referencing the inner getName(..) function.

//* The use of an IIFE implies that our program only ever needs a single central instance of the module, commonly referred to as a "singleton." Indeed, this specific example is simple enough that there's no obvious reason we'd need anything more than just one instance of the Student module.

Student.getName(73); // Suzy

/**
 *
 ** 4️⃣ Module Factory (Multiple Instances)
 * */

// factory function, not singleton IIFE
function defineStudent() {
	var records = [
		{ id: 14, name: 'Kyle', grade: 86 },
		{ id: 73, name: 'Suzy', grade: 87 },
		{ id: 112, name: 'Frank', grade: 75 },
		{ id: 6, name: 'Sarah', grade: 91 },
	];

	var publicAPI = {
		getName,
	};

	return publicAPI;

	// ************************

	function getName(studentID) {
		var student = records.find((student) => student.id == studentID);
		return student.name;
	}
}

var fullTime = defineStudent();
fullTime.getName(73);

//* We then call the module factory, producing an instance of the module that we label fullTime. This module instance implies a new instance of the inner scope, and thus a new closure that getName(..) holds over records. fullTime.getName(..) now invokes the method on that specific instance.
