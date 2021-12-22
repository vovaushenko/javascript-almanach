// Polymorphism means that we have a base class or interface
// and by inheriting from it we could have several classes that implement the shared methods (or at least one)
// and each of those classes could have different realizations of this method

// ! Abstract class
class Cache {
	constructor() {
		const proto = Object.getPrototypeOf(this);
		if (proto.constructor === Cache) {
			throw new Error('Abstract class should not be instantiated');
		}
		this.allocated = 0;
	}

	read(key) {
		const s = JSON.stringify({ read: { key } });
		throw new Error('Method is not implemented ' + s);
	}

	add(key, val) {
		const s = JSON.stringify({ add: { key, val } });
		throw new Error('Method is not implemented ' + s);
	}

	delete(key) {
		const s = JSON.stringify({ delete: { key } });
		throw new Error('Method is not implemented ' + s);
	}
}

class MapCache extends Cache {
	constructor() {
		super();
		this.data = new Map();
	}

	read(key) {
		return this.data.get(key);
	}

	add(key, val) {
		const prev = this.data.get(key);
		if (prev) this.allocated -= prev.length;
		this.allocated += val.length;
		this.data.set(key, val);
	}

	delete(key) {
		const val = this.data.get(key);
		if (val) {
			this.allocated -= val.length;
			this.data.delete(key);
		}
	}
}

class ObjectCache extends Cache {
	constructor() {
		super();
		this.data = {};
	}
	// ...
}
