/**
 * @BUILDER
 *
 * Used for creating objects with complicated states
 * Can have an additional layer of abstraction -> director that supevises several builders
 * */

class Car {
	constructor() {
		this.autoPilot = false;
		this.parctronic = false;
		this.signalling = false;
	}
}

class CarBuilder {
	constructor() {
		this.car = new Car();
	}

	addAutoPilot(autoPilot) {
		this.car.autoPilot = autoPilot;
		return this;
	}

	addParctronic(parctronic) {
		this.car.parctronic = parctronic;
		return this;
	}

	addSignalling(signalling) {
		this.car.signalling = signalling;
		return this;
	}

	updateEngine(engine) {
		this.car.engine = engine;
		return this;
	}

	build() {
		return this.car;
	}
}

const myCar = new CarBuilder()
	.addAutoPilot(true)
	.addParctronic(true)
	.addSignalling(true)
	.updateEngine('V8')
	.build();

console.log({ myCar });

console.log(myCar);
