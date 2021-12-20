'use strict';
const arr = [];

setInterval(() => {
	arr.push(Math.floor(Math.random() * 100));
	console.log(arr);
}, 1000);
