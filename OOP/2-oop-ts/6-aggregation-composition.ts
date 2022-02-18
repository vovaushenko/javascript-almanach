/**
 * @COMPOSITION
 *
 *
 * Class Car uses object Wheels, object Engine etc..
 * ! Wheels and engine cannot exist outside of the car and they are declared in constructor
 */

/**
 * @AGGREGATION
 *
 * Some re-usable object class is passed in constructor and can be used in several classes
 * Car can use air purier. But appartment can also use air purier
 */

class Engine {
	public drive() {
		console.log('wroom wroom');
	}
}

class Wheel {
	public drive() {
		console.log('brr brr brr');
	}
}

class Car {
	engine: Engine;
	wheels: Array<Wheel>;
	constructor() {
		// composition
		this.engine = new Engine();
		this.wheels.push(new Wheel());
	}
	// delegation
	drive() {
		this.engine.drive();
	}
}

const mersedes = new Car();
mersedes.drive();
