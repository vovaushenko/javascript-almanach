// In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. And a class may extend only one other class.

// But sometimes that feels limiting. For instance, we have a class StreetSweeper and a class Bicycle, and want to make their mix: a StreetSweepingBicycle.

// 🟢🟢🟢🟢🟢🟢    A mixin example    🟢🟢🟢🟢🟢🟢
// The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class

// For instance here the mixin sayHiMixin is used to add some “speech” for User:

let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User('Dude').sayHi();

// Mixins can make use of inheritance inside themselves.

// For instance, here sayHiMixin inherits from sayMixin:
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin2 = {
  __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)

  sayHi() {
    // call parent method
    super.say(`Hello ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  },
};

class User2 {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User2.prototype, sayHiMixin2);

// now User can say hi
new User2('Dude-2').sayHi(); // Hello Dude!
