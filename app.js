const animal = {
	canEat: true,
	bark() {
		console.log('Woof!');
	},
};

const rabit = {
	name: 'Rabit',
	bark() {
		console.log(``);
	},
};

const dog = {
	name: 'Snoop',
	__proto__: rabit,
};

rabit.__proto__ = animal;

console.log(rabit.canEat);
rabit.bark();

dog.bark();

const foo = {};

console.log(Object.getPrototypeOf(dog));

Object.setPrototypeOf(foo, dog);

console.log(Object.getPrototypeOf(foo));

foo.bark();
