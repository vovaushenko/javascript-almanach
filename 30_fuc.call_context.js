function sayHi(phrase) {
  console.log(this.name + ':' + phrase);
}

let user1 = { name: 'Alex' };
let user2 = { name: 'John' };

sayHi.call(user1, 'hello');
sayHi.call(user2, 'hi');
