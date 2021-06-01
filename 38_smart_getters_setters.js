// Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

// For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short 😔');
      return;
    }
    this._name = value;
  },
};

user.name = 'Alex';
console.log(user);
console.log(user.name);
console.log(user._name);

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.birthday.getFullYear();
    },
  });
}

let john = new User('John', new Date(1989, 2, 24));
console.log(john);
console.log(john.age);
