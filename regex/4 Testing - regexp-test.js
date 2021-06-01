const colors = require('colors');
// The method regexp.test(str) looks for at least one match, if found, returns true, otherwise false.

const phrase = 'I Love JavaScript';

const reg = /javascript/i;

console.log(`It is ${reg.test(phrase)} that I love JS`);
