// 🍏🍏🍏Constructor function🍏🍏🍏

// Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.

// Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.

function User(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = false;

  this.sayHi = function () {
    return 'My name is: ' + this.name;
  };
}

let user = new User('Alex', 20);
console.log(user);
console.log(user.sayHi());
