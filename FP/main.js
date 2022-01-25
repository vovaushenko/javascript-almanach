'use strict';

const sum = (...args) => args.reduce((a, b) => a + b, 0);

const sum4 = (a, b, c, d) => a + b + c + d;
const increment = (x) => x + 1;
const decrement = (x) => x - 1;
const double = (x) => x * 2;
const square = (x) => x ** 2;

// maybe

const maybe = (x) => (fn) => maybe(x && fn ? fn(x) : null);

const op = maybe(5)(increment)(double)(increment)(double)(console.log);
