//   💚💚💚💚  Error handling, "try...catch"  💚💚💚💚

// ❗❗❗try...catch only works for runtime errors

try {
  console.log('Start of try runs'); // (1) <--

  // ...no errors here

  console.log('End of try runs'); // (2) <--
} catch (err) {
  console.log('Catch is ignored, because there are no errors'); // (3)
}

try {
  console.log('Start of try runs'); // (1) <--

  lalala; // error, variable is not defined!

  console.log('End of try (never reached)'); // (2)
} catch (err) {
  console.log(`Error has occurred!`); // (3) <--
}

// ❗❗❗try...catch works synchronously

// try {
//   setTimeout(function () {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (err) {
//   console.log("won't work");
// }

// To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    console.log('error is caught here!');
  }
}, 1000);

// 🟢🟢🟢   Error object   🟢🟢🟢

try {
  lalala; // error, variable is not defined!
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}

// 🟢🟢🟢 Throwing our own errors  🟢🟢🟢

// Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

// JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...

//  🟢🟢🟢 try…catch…finally  🟢🟢🟢

try {
  // ... try to execute the code ...
} catch (err) {
  // ... handle errors ...
} finally {
  // ... execute always ...
}

try {
  console.log('try');
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  console.log('catch');
} finally {
  console.log('finally');
}
