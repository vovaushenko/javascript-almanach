// 🟢🟢🟢 Promise API 🟢🟢🟢
// There are 6 static methods in the Promise class. We’ll quickly cover their use cases here.

// 🟢 Promise.all 🟢

// Let’s say we want many promises to execute in parallel and wait until all of them are ready.
// syntax
// let promise = Promise.all([...promises...]);

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(console.log);

// A common trick is to map an array of job data into an array of promises, and then wrap that into Promise.all.

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];
// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));
// Promise.all waits until all jobs are resolved
Promise.all(requests).then((responses) =>
  responses.forEach((response) => console.log(`${response.url}: ${response.status}`))
);

// ❗❗❗❗ If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error. ❗❗❗❗

// 🟢 Promise.allSettled 🟢

// Promise.all rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results successful to proceed:

// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.
// [
//     {status: 'fulfilled', value: ...response...},
//     {status: 'fulfilled', value: ...response...},
//     {status: 'rejected', reason: ...error object...}
//   ]

// 🟢 Promise.race 🟢

// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

// 🟢 Promise.any 🟢

// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError

Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1
