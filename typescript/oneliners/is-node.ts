const isNode = () =>
	typeof process !== 'undefined' &&
	Object.prototype.toString.call(process) === '[object process]';

console.log(isNode());
