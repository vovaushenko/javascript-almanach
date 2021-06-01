//               🟢🟢🟢  Methods🟢🟢🟢
const user = { name: 'Vasia', secondName: 'Pupkin' };
function sayHi() {
  return 'Hello world';
}
user.sayHi = sayHi;

console.log(user.sayHi());

//              🟢🟢🟢 “THIS” in methods🟢🟢🟢

let user2 = {
  name: 'John',
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this);
    console.log(this.name);
  },
};

user2.sayHi();

function coolF() {
  console.log(this);
}

// Arrow functions have no “this”

let user3 = {
  firstName: 'Ilya',
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },

  saySecondHi() {
    console.log(this.firstName);
  },
};

// Chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

console.log(ladder.up().up().up().down().showStep().up().up().down());
