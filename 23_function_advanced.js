// 🟢🟢🟢  The “arguments” variable  🟢🟢🟢

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments);

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

showName('name', 'coolname', 5);

// Arrow functions do not have "arguments"

// Spread syntax

let arr1 = [1, -2, 3, 4, 15];
let arr2 = [8, 3, -8, 1];

const max = Math.max(...arr1, ...arr2);
console.log(max);

// Copy an array/object
const obj = { name: 'Vasia' };
let copyArr = [...arr1];
let copyObj = { ...obj };
