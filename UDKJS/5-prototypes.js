// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch3.md
// Where this is a characteristic of function execution, a prototype is a characteristic of an object, and specifically resolution of a property access.

//* Think about a prototype as a linkage between two objects; the linkage is hidden behind the scenes, though there are ways to expose and observe it. This prototype linkage occurs when an object is created; it's linked to another object that already exists.

//* A series of objects linked together via prototypes is called the "prototype chain."

var homework = {
	topic: 'JS',
};

// We can observe this prototype linkage delegation from homework to Object.prototype:
console.log(homework.toString()); // [object Object]

//⭐ Object Linkage ⭐
// To define an object prototype linkage, you can create the object using the Object.create(..) utility:
var homework = {
	topic: 'JS',
};

var otherHomework = Object.create(homework);

otherHomework.topic;
console.log(otherHomework);
// The first argument to Object.create(..) specifies an object to link the newly created object to, and then returns the newly created (and linked!) object.

// ⭐⭐⭐TIP⭐⭐⭐
// Object.create(null) creates an object that is not prototype linked anywhere, so it's purely just a standalone object; in some circumstances, that may be preferable.
