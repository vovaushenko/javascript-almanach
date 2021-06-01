// 🟢🟢🟢🟢 Microtasks 🟢🟢🟢🟢

// Promise handlers .then/.catch/.finally are always asynchronous.
let promise = Promise.resolve();

promise.then(() => console.log('promise done!'));

console.log('code finished'); // this alert shows first

// 🟢Microtasks queue🟢

// Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term).

// Or, to say more simply, when a promise is ready, its .then/catch/finally handlers are put into the queue; they are not executed yet. When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.

// 🟢 What if the order matters for us? How can we make code finished run after promise done?🟢

// Easy -> put in then

let secondPromise = new Promise((resolve, reject) => {
  resolve('hey');
});

secondPromise.then((res) => console.log(res)).then(() => console.log('code finished'));
