function sum(a) {
	function f(b) {
		return sum(a + b);
	}

	f.toString = () => a;

	return f;
}
console.log(+sum(1)(2)(3));
