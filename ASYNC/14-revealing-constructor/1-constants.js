'use strict';

// * We can pass args in a function in a form of a CONSTANT, funtion that returns CONSTANT, and callback CONSTANT

const scalarConstant = 5;
const functionConstant = () => 6;
const callbackConstant = (f) => f(7);

const fn = (x, f, g) => {
	console.dir({ x });
	console.dir({ y: f() });
	g((z) => {
		console.dir({ z });
	});
};

fn(scalarConstant, functionConstant, callbackConstant);
