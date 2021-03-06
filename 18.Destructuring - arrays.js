// second element is not needed
let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

console.log(firstName, title);

// π’π’π’π’π’π’π’Works with any iterable on the right-sideπ’π’π’π’π’π’π’

let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

//π’π’π’π’π’π’π’Assign to anything at the left-sideπ’π’π’π’π’π’π’

let user = {};
[user.name, user.secondName] = 'Alex Jones'.split(' ');
console.log(user);
const { name, secondName } = user;
console.log(name, secondName);

// Looping with .entries()
let user1 = {
  name: 'John',
  age: 30,
};

for (let [key, value] of Object.entries(user1)) {
  console.log(`key -> ${key} and value  -> ${value}`);
}

// π’π’π’π’π’π’π’Swapping trickπ’π’π’π’π’π’π’

let guest = 'Vasia';
let admin = 'John';
[guest, admin] = [admin, guest];

console.log(admin, guest);

// π’π’π’π’π’π’π’The rest ββ¦βπ’π’π’π’π’π’π’

let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

console.log(rest);
