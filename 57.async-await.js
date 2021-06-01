// 🟢🟢🟢 Async/await 🟢🟢🟢

// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”

// The word “async” before a function means one simple thing: a function always returns a promise.

async function f() {
  return 1;
}

f().then(console.log);

// …We could explicitly return a promise, which would be the same:

async function f2() {
  return Promise.resolve(1);
}

f2().then(console.log);

// 🟢 Await 🟢
// The keyword await makes JavaScript wait until that promise settles and returns its result.

async function asynchronousFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done ! 😊');
    }, 1000);
  });

  let result = await promise;

  console.log(result);
}

// ❗❗❗Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

asynchronousFunction();

//🟩🟩 await won’t work in the top-level code🟩🟩
// syntax error in top-level code
// let response = await fetch('/article/promise-chaining/user.json');
// let user = await response.json();

// But we can wrap it into an anonymous async function, like this:

(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
})();

// 🟩🟩  Async class methods🟩🟩

// To declare an async class method, just prepend it with async:

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter().wait().then(console.log); // 1 (this is the same as (result => alert(result)))

// 🟢 🟢 🟢 Error handling 🟢 🟢 🟢

// We can catch that error using try..catch, the same way as a regular throw:
async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch (err) {
    console.error(err); // TypeError: failed to fetch
  }
}

f();

// 🟢 🟢 🟢 async/await works well with Promise.all 🟢 🟢 🟢

// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  //...
]);
