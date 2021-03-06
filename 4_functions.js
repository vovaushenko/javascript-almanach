// Functions should be short and do exactly one thing. If that thing is big, maybe itβs worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but itβs definitely a good thing.

// A separate function is not only easier to test and debug β its very existence is a great comment!

//  πππ FUNCTION DECLARATIONπππ

function showMessage(message) {
  console.log(message);
}

// Default parameters (arguments)

function showHello(hello = 'Hey, there is no input') {
  return hello;
}

console.log(showHello());

//  πππ FUNCTION EXPRESSION πππ
const functionExpression = () => 'This is Function expresion';

const anotherExpression = functionExpression;

console.log(functionExpression());
console.log(anotherExpression); //will show funcion

// πππ Callback functionsπππ

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert('You agreed.');
}

function showCancel() {
  alert('You canceled the execution.');
}
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.
ask('Do you agree?', showOk, showCancel);
