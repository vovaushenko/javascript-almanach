//* One aspect of Node that often catches JS developers off-guard is that Node treats every single .js file that it loads, including the main one you start the Node process with, as a module (ES module or CommonJS module, see Chapter 8). The practical effect is that the top level of your Node programs is never actually the global scope, the way it is when loading a non-module file in the browser.

//! As of time of this writing, Node has recently added support for ES modules. But additionally, Node has from its beginning supported a module format referred to as "CommonJS", which looks like this:

var studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ studentName }!`);
}

hello();
// Hello, Kyle!

module.exports.hello = hello;

//! Before processing, Node effectively wraps such code in a function, so that the var and function declarations are contained in that wrapping function's scope, not treated as global variables.

//* Envision the preceding code as being seen by Node as this (illustrative, not actual):


function Module(module,require,__dirname,...) {
  var studentName = "Kyle";

  function hello() {
      console.log(`Hello, ${ studentName }!`);
  }

  hello();
  // Hello, Kyle!

  module.exports.hello = hello;
}

//* Node then essentially invokes the added Module(..) function to run your module. You can clearly see here why studentName and hello identifiers are not global, but rather declared in the module scope.


//! So how do you define actual global variables in Node? The only way to do so is to add properties to another of Node's automatically provided "globals," which is ironically called global. global is a reference to the real global scope object, somewhat like using window in a browser JS environment.

global.studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ studentName }!`);
}

hello();
// Hello, Kyle!

module.exports.hello = hello;

//* Here we add studentName as a property on the global object, and then in the console.log(..) statement we're able to access studentName as a normal global variable.

//! Remember, the identifier global is not defined by JS; it's specifically defined by Node.