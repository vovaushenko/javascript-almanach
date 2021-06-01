//⏲️⏲️⏲️  setTimeout ⏲️⏲️⏲️

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi() {
  console.log('hello there!');
}

setTimeout(sayHi, 1000);

function sayHello(phrase, who) {
  console.log(`${phrase} ${who}`);
}

setTimeout(sayHello, 500, 'Hello, my dear', 'Alex');

// Canceling with clearTimeout
//  💚Syntax💚
// let timerId = setTimeout(...);
// clearTimeout(timerId);

let timerId = setTimeout(() => 'never happens', 1000);
clearTimeout(timerId);

// ⏲️⏲️⏲️ setInterval ⏲️⏲️⏲️

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// repeat with the interval of 2 seconds
let newTimerId = setInterval(() => console.log('tick'), 500);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(newTimerId);
  console.log('stop');
}, 5000);

// Nested setTimeout

let timerIdNested = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(timerIdNested, 2000); // (*)
}, 2000);
