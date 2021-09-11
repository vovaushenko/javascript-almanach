//* IIFE WRAPPER to protect original object
let obj = (function (myObj) {
	let handler = {
		get: function (target, prop) {},
		set: function (target, prop) {},
	};
	return new Proxy(myObj, handler);
})({ prop1: 'hey', prop2: 'there' });

//! VALIDATION JSON DATA WITH PROXIES

let objects = [
	{ id: 123, name: 'Steve', age: 15 },
	{ id: 3, name: 'Alex', age: -15 },
	{ id: 512, name: 'Joe', age: 134 },
];

objects = objects.map((person) => {
	return new Proxy(person, {
		get: function (target, prop) {
			//* VALIDATE AGE
			if (prop in target) {
				if (prop === 'age') {
					if (target[prop] >= 0 && target[prop] < 130) {
						return target[prop];
					} else {
						//! WE CAN THROW ERROR, RETURN NULL ETC
						throw new RangeError('Age is too high or too low');
					}
				}
			}
		},
		set: function (target, prop) {
			return true;
		},
	});
});

objects.forEach((person) => {
	try {
		console.log(person.age);
	} catch (error) {
		console.log(error.name, error.message);
	}
});
