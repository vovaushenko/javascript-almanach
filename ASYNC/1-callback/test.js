const wrapAsync =
	(fn) =>
	(...args) =>
		setTimeout(() => fn(...args), Math.floor(Math.random() * 2500));

const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

const w1 = wrapAsync((_, cb) => {
	f1();
	cb();
});
const w2 = wrapAsync((_, cb) => {
	f2();
	cb();
});
const w3 = wrapAsync((_, cb) => {
	f3();
	cb();
});
const w4 = wrapAsync((_, cb) => {
	f4();
	cb();
});

w1('foo', () => {
	w2('bar', () => {
		w3('baz', () => {
			w4('daz', () => {
				console.log('=== e n d ===');
			});
		});
	});
});
