// 🟢🟢🟢[[Prototype]]🟢🟢🟢

// Summary
// ⭐ In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
// ⭐ We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
// ⭐ The object referenced by [[Prototype]] is called a “prototype”.
// ⭐ If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
// ⭐ Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
// ⭐ If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
// ⭐ The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

// The property [[Prototype]] is internal and hidden, but there are many ways to set it.

// 🟩One of them is to use the special name __proto__, like this:🟩

// 🟩🟩🟩🟩__proto__ is a historical getter/setter for [[Prototype]]🟩🟩🟩
let animal = {
	eats: true,
	walk() {
		console.log('animal walk');
	},
};

let rabbit = { jumps: true };

rabbit.__proto__ = animal; //❕❕❕❕❕❕❕❕ sets animal to be a prototype of rabbit❕❕❕❕❕❕❕❕❕❕❕

console.log(rabbit);
console.log(rabbit.eats);
console.log(rabbit.walk());
// The prototype chain can be longer:

let longEar = {
	earLength: 10,
	__proto__: rabbit,
};

console.log(longEar.eats);
console.log(longEar.jumps);
longEar.walk();

for (let prop in longEar) {
	let isOwn = longEar.hasOwnProperty(prop);
	if (isOwn) {
		console.log(`Own property -> ${prop}`);
	} else {
		console.log(`Inherited -> ${prop}`);
	}
}

// Now if we read something from longEar, and it’s missing, JavaScript will look for it in rabbit, and then in animal.

console.log('🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢VALUE OF THIS🟢🟢🟢🟢🟢🟢🟢🟢🟢');

// 🟢🟢🟢The value of “this”🟢🟢🟢

// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

let coolAnimal = {
	walk() {
		if (!this.isSleeping) {
			console.log(`I walk`);
		}
	},
	sleep() {
		this.isSleeping = true;
	},
};

let whiteRabbit = {
	name: 'White Rabbit',
	__proto__: coolAnimal,
};

whiteRabbit.sleep();

console.log(coolAnimal.isSleeping); //undefinded
console.log(whiteRabbit.isSleeping); //true
