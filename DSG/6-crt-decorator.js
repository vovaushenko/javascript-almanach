/**
 * @DECORATOR
 *
 * A class that gets an object and enhances it with an additional property
 * */

class Car {
	constructor(price, model) {
		this.price = price;
		this.model = model;
	}

	getPrice() {
		return this.price;
	}

	getDescription() {
		return this.model;
	}
}

const bmw = new Car(100000, 'x5');

console.log({ bmw });

class Tesla extends Car {
	constructor(price, model) {
		super(price, model);
	}
}

const modelx = new Tesla(125000, 'model-x');
console.log({ modelx });

/**
 * DECORATORS
 */

class Autopilot {
	constructor(car) {
		this.car = car;
		this.car.price += 5000;
	}

	getPrice() {
		return this.car.getPrice();
	}

	getDescription() {
		return `${this.car.getDescription()} with autopilot`;
	}
}

class Parktronic {
	constructor(car) {
		this.car = car;
		this.car.price += 2500;
	}

	getPrice() {
		return this.car.getPrice() + 2500;
	}

	getDescription() {
		return `${this.car.getDescription()} with parktronic`;
	}
}

const enhancedModelX = new Autopilot(modelx);

console.log({ enhancedModelX });
console.log(enhancedModelX.getPrice());
