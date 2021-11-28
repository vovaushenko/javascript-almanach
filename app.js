function sum(a = 1, b = 2) {
	console.log(arguments);
	return a + b;
}

console.log(sum.length);
console.log(sum.toString());

console.log(sum(4, 5, 6, 7, 8));
