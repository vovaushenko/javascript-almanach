// 🟢🟢🟢Promises chaining🟢🟢🟢

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  });
//   The idea is that the result is passed through the chain of .then handlers.

//   Here the flow is:

//   The initial promise resolves in 1 second (*),
//   Then the .then handler is called (**).
//   The value that it returns is passed to the next .then handler (***)
//   …and so on.

//🟢🟢🟢Returning promises🟢🟢🟢
// A handler, used in .then(handler) may create and return a promise.
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });

// 🟢🟢  Example: loadScript 🟢🟢
loadScript('/article/promise-chaining/one.js')
  .then((script) => loadScript('/article/promise-chaining/two.js'))
  .then((script) => loadScript('/article/promise-chaining/three.js'))
  .then((script) => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });
