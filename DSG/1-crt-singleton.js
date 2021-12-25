/**
 * @CREATINAL Patterns
 *
 * Singleton
 *
 * A single intance of an object with a single point of entry. This is both a pattern and antipattern.
 */

// == 1 way == singleton on literal object
const instance1 = {
	name: 'singleton',
};

const instance2 = {
	name: 'singleton',
};

instance1 == instance2; // false
// {} === {}  // false
//! each literal is a SINGLETON Indeed

// == 2 way - BAD WAY ==

let instance;

class Counter {
	constructor() {
		if (!instance) instance = this;
		instance.count = 0;
		return instance;
	}

	getCount() {
		return instance.count;
	}

	increase() {
		return instance.count++;
	}
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increase();
myCount1.increase();
myCount2.increase();
myCount2.increase();

console.log(myCount1.getCount());
console.log(myCount2.getCount());

// 3 way - better

class CounterBest {
	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}
	getCount() {
		return instance.count;
	}

	increase() {
		return instance.count++;
	}
}
const myCount3 = new Counter();
const myCount4 = new Counter();
myCount3.increase();
myCount3.increase();
myCount4.increase();
myCount4.increase();

console.log(myCount3.getCount());
console.log(myCount4.getCount());
