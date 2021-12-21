'use strict';

const arr1 = ['one', 'two', 'three'];
const arr2 = ['uno', 'due', 'thre'];

Object.setPrototypeOf(arr2, arr1);

console.dir({
	arr1,
	arr2,
});

delete arr2[1];

console.log({ arr2 });

//! here the number will pop up!
console.log(arr2[0], arr2[1], arr2[2]);
