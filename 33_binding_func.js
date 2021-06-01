// 🟢🟢🟢    Function binding    🟢🟢🟢

// Losing “this”
// Once a method is passed somewhere separately from the object – this is lost.

// let user = {
//   firstName: 'Alex',
//   sayHi() {
//     console.log(`Hello, ${this.firstName} 😊!`);
//   },
// };

// user.sayHi();

// setTimeout(user.sayHi, 1000); // hello undefined

// const greet = user.sayHi;

// greet(); // hello undefined

// // 1st solution

// setTimeout(() => user.sayHi(), 2000);

// 🟢🟢🟢  Solution 2 => BIND 🟢🟢🟢

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
