'use strict';

/**
 *@ADAPT array into a queue
 */

const ArrayToQueueAdapter = function () {
	//!! Inherit from array
	Array.call(this);
};

ArrayToQueueAdapter.prototype.enqueue = function (data) {
	this.push(data);
};

ArrayToQueueAdapter.prototype.dequeue = function () {
	return this.pop();
};
//* add getter and setter
Object.defineProperty(ArrayToQueueAdapter.prototype, 'count', {
	get: function myProperty() {
		return this.length;
	},
});
//* setPrototypeOf instead of extends
Object.setPrototypeOf(ArrayToQueueAdapter.prototype, Array.prototype);

// Usage

const queue = new ArrayToQueueAdapter();
queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');
while (queue.count) {
	console.log(queue.dequeue());
}
