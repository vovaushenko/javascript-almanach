// The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

// In a browser it is named window, for Node.js it is global, for other environments it may have another name.

alert('Hello');
// is the same as
window.alert('Hello');

// In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:
var gVar = 5;
window.gVar;
console.log(window.gVar);

// If a value is so important that you’d like to make it available globally, write it directly as a property:

window.currentUser = {
  name: 'John',
};

// Using for polyfills
if (!window.Promise) {
  console.log('your browser is really old!');
}
