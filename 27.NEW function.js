// let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a+b');

console.log(sum(2, 3));

let sayHi = new Function('console.log("Hello world")');

sayHi();

// let str = ... receive the code from a server dynamically ...

// let func = new Function(str);
// func();

// Closure

let value = 'Hello world!';

let newFunc = new Function('console.log(value)');
newFunc(); // error!!! value is not defined
