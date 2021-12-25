/**
 * @ABSTRACT FACTORY
 *
 * Abstract Factory
 *      🔝
 * Concrete Factory(create()) -> Abstract Product
 *                             🔝
 *                          Products
 * */

// Abstract Factory
function bmwProducer(kind) {
	return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories
function familyCarFactory() {
	return new I3();
}

function sportCarFactory() {
	return new Z4();
}

class Z4 {
	info() {
		return 'Z4 is a cool sport car';
	}
}

class I3 {
	info() {
		return 'I3 is a cool family car';
	}
}

// Initialize abstract factory of sports cars
const produceSportCar = bmwProducer('sport');
const myCar = new produceSportCar();
const produceFamilyCar = bmwProducer('family');
const familyCar = new produceFamilyCar();

console.log(myCar.info());
console.log(familyCar.info());
