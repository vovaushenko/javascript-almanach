// In objects we have data properties and 🟢🟢🟢accessor properties 🟢🟢🟢

// They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};

//  🔋🔋🔋🔋 The getter works when obj.propName is read, the setter – when it is assigned.🔋🔋🔋🔋

const user = {
  name: 'Vova',
  secondName: 'CoolDude',

  get fullName() {
    return `${this.name} ${this.secondName}`;
  },
};

// We don’t call user.fullName as a function, we read it normally
console.log(user.fullName);

let user1 = {
  get fullName() {
    return `...`;
  },
};

user1.fullName = 'Cool Dude';

console.log(user1); // will not work
console.log(user1.fullName);
