/**
 * @FLYWEIGHT
 *
 * In computer programming, the flyweight software design pattern refers to an object that minimizes memory usage by sharing * some of its data with other similar objects.
 * */

// * eg. If we have one repeated property or method in a lot of objects. Will create a class with this method, prop and other objects could inherit from it.

class Auto {
	constructor(model) {
		this.model = model;
	}
}

class AutoFactory {
	constructor(name) {
		this.models = {};
	}

	create(name) {
		let model = this.models[name];
		if (model) return model;
		this.models[name] = new Auto(name);
		return this.models[name];
	}
}

// https://www.youtube.com/watch?v=bTiAfLbmsnY&t=2763s
