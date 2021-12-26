/**
 * @PROTOTYPE
 *
 * Allow to copy objects and not to be concerned with the details of their realization
 * */

// prototype class

class TeslaCar {
	constructor(model, price, color, autopilot) {
		this.model = model;
		this.price = price;
		this.color = color;
		this.autilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.color, this.autilot);
	}
}

const prototypeCar = new TeslaCar('S', 80000, 'black', false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// update current car
car1.color = 'red';
car1.autilot = true;
car2.price = 75000;
car2.color = 'golden';

console.log({
	car1,
	car2,
	car3,
});
