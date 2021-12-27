/**
 * @COMPOSITE
 *
 * Creates some class that is made of composites that share one interface
 * */

class Equipment {
	getPrice() {
		return this.price || 0;
	}

	setPrice(price) {
		this.price = price;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}
}

class Engine extends Equipment {
	constructor() {
		super();
		this.setName('engine');
		this.setPrice(800);
	}
}
class Body extends Equipment {
	constructor() {
		super();
		this.setName('body');
		this.setPrice(3800);
	}
}
class Wheels extends Equipment {
	constructor() {
		super();
		this.setName('wheels');
		this.setPrice(2500);
	}
}

//  * COMPOSITE

class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}

	add(equipment) {
		this.equipments.push(equipment);
	}

	getPrice() {
		return this.equipments.reduce(
			(totalPrice, equipment) => totalPrice + equipment.getPrice(),
			0
		);
	}
}

class TeslaCar extends Composite {
	constructor() {
		super();
		this.setName('Tesla');
	}
}

const modelX = new TeslaCar();
modelX.add(new Engine());
modelX.add(new Body());
modelX.add(new Wheels());

console.log({ modelX });

console.log(`${modelX.getName()}. Price is ${modelX.getPrice()}`);
