// What is a class?

// 🟢🟢In JavaScript, a class is a kind of function.🟢🟢
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

console.log(typeof User); // function

// What class User {...} construct really does is:

// Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// Stores class methods, such as sayHi, in User.prototype.

// After new User object is created, when we call its method, it’s taken from the prototype, just as described in the chapter F.prototype. So the object has access to class methods.

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
