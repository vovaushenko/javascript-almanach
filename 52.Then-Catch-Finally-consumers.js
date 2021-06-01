// A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using methods .then, .catch and .finally.

// 🟢🟢🟢then🟢🟢🟢
// promise.then(
//   function (result) {
//     /* handle a successful result */
//   },
//   function (error) {
//     /* handle an error */
//   }
// );

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done!'), 1000);
});

let failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Oops, promise has failed.')), 2000);
});
// resolve runs the first function in .then
promise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);

failedPromise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);

// If we’re interested only in successful completions, then we can provide only one function argument to .then:

promise.then(console.log);

//  🟢🟢🟢catch🟢🟢🟢
// If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

let rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// .catch(f) is the same as promise.then(null, f)
rejectedPromise.catch(console.log); // shows "Error: Whoops!" after 1 second

// 🟢🟢🟢finally🟢🟢🟢
// Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.

// finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.
