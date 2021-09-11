const obj = {
	prop1: 'hello',
	prop2: 'goodbye',
};

let handler = {
	default: 'This Prop does not exist',
	// get is a trap
	get: function (target, prop, receiver) {
		if (prop in target) {
			/*
      we can do some manipulations with value here
      */
			return target[prop].toUpperCase();
		} else {
			throw new TypeError(this.default);
			// return this.default;
		}
	},
	set: function (target, prop, receiver) {
		if (prop in target) {
			return true;
		} else {
			throw new TypeError('No such property');
		}
	},
};

let proxy = new Proxy(obj, handler);

proxy.prop1 = 'HEY';
// proxy.prop3 = 'BLAH'; *Will error out

console.log(proxy.prop1);
console.log(proxy.prop3);
