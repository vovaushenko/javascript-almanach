/**
 * @FACTORY
 *
 * Creator (factoryMethod) -> Abstract Product
 *                                    🔝
 *                                Products
 * */

// We use factory when we need to create a lot of objects with the same structure but different data inside

class BMW {
	constructor(model, price, maxSpeed, color) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
		this.color = color;
	}
}

class BmwFactory {
	create(type, color) {
		if (type === 'X5') {
			return new BMW(type, 108000, 300, color);
		}
		if (type === 'X6') {
			return new BMW(type, 111000, 320, color);
		}
	}
}

const factory = new BmwFactory();

const x5rd = factory.create('X5', 'red');
const x5gr = factory.create('X5', 'green');

const x6blue = factory.create('X6', 'blue');

console.log({ x5rd, x5gr, x6blue });
