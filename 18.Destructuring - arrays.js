// second element is not needed
let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

console.log(firstName, title);

// 🟢🟢🟢🟢🟢🟢🟢Works with any iterable on the right-side🟢🟢🟢🟢🟢🟢🟢

let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

//🟢🟢🟢🟢🟢🟢🟢Assign to anything at the left-side🟢🟢🟢🟢🟢🟢🟢

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

// 🟢🟢🟢🟢🟢🟢🟢Swapping trick🟢🟢🟢🟢🟢🟢🟢

let guest = 'Vasia';
let admin = 'John';
[guest, admin] = [admin, guest];

console.log(admin, guest);

// 🟢🟢🟢🟢🟢🟢🟢The rest ‘…’🟢🟢🟢🟢🟢🟢🟢

let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

console.log(rest);
