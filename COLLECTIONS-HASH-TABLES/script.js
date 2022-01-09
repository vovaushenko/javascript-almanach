'use strict';

const cities = new Map();
cities.set('Milano', 500000);
cities.set('Prague', 500000);
cities.set('Vancouver', 2100000);

console.log({ cities });

const keys = cities.keys();
const values = cities.values();
const entries = cities.entries();

console.log({
	keys,
	values,
});

for (let key of keys) console.log(key);
for (let val of values) console.log(val);
for (const [city, population] of entries) console.log({ city, population });
