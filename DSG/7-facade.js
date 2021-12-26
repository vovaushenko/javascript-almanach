/**
 * @FACADE
 *
 * The main task is to hide a complex logic behind an easy-looking facade
 * e.g. connect complex sustems, and provide a convenient interface
 * */

class Conveyor {
	setBody() {
		console.log('Body ready!');
		return this;
	}
	setEngine() {
		console.log('Engine ready!');
		return this;
	}
	setInterior() {
		console.log('Interior ready!');
		return this;
	}
	setExterior() {
		console.log('Exterior ready!');
		return this;
	}
	setWheels() {
		console.log('Wheels ready!');
		return this;
	}
	addElectronics() {
		console.log('Electronics ready!');
		return this;
	}
	paint() {
		console.log('Painted! 🖌️');
		return this;
	}
}

const conveyour = new Conveyor()
	.paint()
	.setBody()
	.setEngine()
	.setExterior()
	.setInterior()
	.setWheels();

class ConveyourFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		this.car.setBody();
		this.car.setEngine();
		this.car.setInterior();
		this.car.addElectronics();
		this.car.paint();
		this.car.setWheels();
	}

	changeEngine() {
		this.car.getBody();
		this.car.setBody();
	}
	changeInterior() {
		this.car.getInterior();
		this.car.setInterior();
	}
}

const conv = new ConveyourFacade(new Conveyor());
