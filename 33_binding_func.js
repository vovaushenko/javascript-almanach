// π’π’π’    Function binding    π’π’π’

// Losing βthisβ
// Once a method is passed somewhere separately from the object β this is lost.

// let user = {
//   firstName: 'Alex',
//   sayHi() {
//     console.log(`Hello, ${this.firstName} π!`);
//   },
// };

// user.sayHi();

// setTimeout(user.sayHi, 1000); // hello undefined

// const greet = user.sayHi;

// greet(); // hello undefined

// // 1st solution

// setTimeout(() => user.sayHi(), 2000);

// π’π’π’  Solution 2 => BIND π’π’π’

// let boundFunc = func.bind(context);

let user2 = {
  firstName: 'John',
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user2);

funcUser();

let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user.sayHi.bind(user);

sayHi();

setTimeout(sayHi, 1000);
