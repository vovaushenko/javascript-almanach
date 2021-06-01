// 🟢🟢🟢🟢🟢 Class Expression 🟢🟢🟢🟢🟢

let User1 = class {
  sayHi() {
    alert('Hello');
  }
};

// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

// We can even make classes dynamically “on-demand”, like this:

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

let User = makeClass('cool');
new User().sayHi();

// 🟢🟢🟢🟢🟢  Getters/setters   🟢🟢🟢🟢🟢
class User3 {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short.');
      return;
    }
    this._name = value;
  }
}

let user = new User3('John');
console.log(user.name); // John

user = new User3(''); // Name is too short

// 🟢🟢🟢🟢🟢Class fields🟢🟢🟢🟢🟢
class User4 {
  name = 'John'; //CLASS FIELD

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}
