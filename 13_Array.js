let arr = [];
arr[5] = 'cool';
console.log(arr);

arr.age = '25';

for (let key in arr) console.log(key);

// lenght

const arr1 = [1, 2, 3, 4, 6];
arr1.length = 10;
console.log(arr1); // + 5 empty
arr1.length = 2; // truncater to 2 items
console.log(arr1);

// new Array
const array = new Array(1, 2, 3, 4, 5, 6);
console.log(array);
