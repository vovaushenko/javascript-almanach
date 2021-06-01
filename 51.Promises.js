// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.

// 🟢🟢The constructor syntax for a promise object is:🟢🟢
let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")
});

// The function passed to new Promise is called the executor.
// Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

// When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

// resolve(value) — if the job finished successfully, with result value.
// reject(error) — if an error occurred, error is the error object.

// The promise object returned by the new Promise constructor has these internal properties:

// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.

// 🟩“fulfilled promise”🟩
let fullfilledPromise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed
  setTimeout(() => resolve('done'), 1000);
});

let unfulfilledPromise = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

//   There can be only a single result or an error
