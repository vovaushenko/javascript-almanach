const Text = function (s) {
	this.value = s;
};

Text.prototype.line = function (a) {
	this.value += '\n' + '🍌' + a + '🍌';
	return this;
};

Text.prototype.toString = function () {
	return this.value;
};

const txt = new Text('foo').line('bar').line('baz').line('zzz').line('ffff');

console.log(txt.toString());
