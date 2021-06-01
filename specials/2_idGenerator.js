// Generator

function* customIDGenerator() {
	let i = 0;
	while (true) {
		yield i++;
	}
}

const generateId = customIDGenerator();

console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
