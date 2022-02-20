'use strict';

const data = { name: 'Marcus Aurelius', city: 'Rome', born: 121 };

//* Object person is a wrapper "box" around data
// ! second arg will be interceptors
const person = new Proxy(data, {});

console.dir({ 'person.born': person.born });
console.dir({ 'person.year': person.year });

for (const key in person) {
	console.dir({
		key,
		value: person[key],
	});
}
