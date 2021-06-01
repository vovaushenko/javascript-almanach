// JSON.stringify

// JavaScript provides methods:

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
};

let json = JSON.stringify(student);

console.log(json);

// JSON stringify skips -> functions, symbolic keys/values, props that store undefined

let user = {
  sayHi() {
    // ignored
    alert('Hello');
  },
  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
};

let json2 = JSON.stringify(user);
console.log(json2); //{}

// JSON.parse

let numbers = '[0, 1, 2, 3]';
numbers = JSON.parse(numbers);
console.log(numbers);

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user1 = JSON.parse(userData);

console.log(user1.friends[1]);
