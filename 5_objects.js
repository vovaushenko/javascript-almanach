// An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user = {};
let user1 = new Object(); //using constructor

let secondUser = { name: 'Alex', age: 25 };

// 🍏delete property🍏
delete secondUser.age;

// 🍏Square brackets🍏
secondUser['love pizza'] = true;

console.log(secondUser);

// 🍏Computed properties🍏
let fruit = 'Apple'; // let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

// 🍏Property existence test, “in” operator🍏

let coolUser = { name: 'Cool', secondName: 'User' };
console.log('name' in coolUser); //true
console.log('age' in coolUser); //false

// 🍏🍏🍏Ordered like an object🍏🍏🍏
//  🍏🍏For in🍏🍏

let codes = {
  49: 'Germany',
  41: 'Switzerland',
  44: 'Great Britain',
  // ..,
  1: 'USA',
};

for (let code in codes) console.log(code); // 1 41 44 49
// …On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
let user3 = {
  name: 'John',
  surname: 'Smith',
};
user3.age = 25;

for (let prop in user3) console.log(prop);
