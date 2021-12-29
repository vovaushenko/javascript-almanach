// * IMMUTABLE
const text = (s = '') => ({
	line: (a) => text(s + '\n' + a),
	toString: () => s,
});

const txt = text('line1').line('line2').line('line3').line('line4');

console.log(txt + '');

// *MUTABLE

const textMutable = (
	s = '',
	o = { line: (a) => text(s + '\n' + a, o), toString: () => s }
) => o;

const txt2 = textMutable('line1').line('line2').line('line3').line('line4');

console.log(txt2.toString());
