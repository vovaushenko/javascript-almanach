// Sync compose

const compose = (f1, f2) => (x) => f2(f1(x));

//  Use
const inc = (x) => x + 1;
const twice = (x) => x * 2;

const f = compose(inc, twice);

console.log(f(5));
