function foo() {
	return bar(function inner(msg) {
		return msg.toUpperCase();
	});
}
function bar(func) {
	return func('Hello!');
}

foo();
