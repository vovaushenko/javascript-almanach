let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(val) {
    [this.name, this.surname] = val.split(' ');
  },
};
console.log(user.fullName);
user.fullName = 'Alex Boo';
console.log(user.fullName);
console.log(user.name);
console.log(user.surname);
