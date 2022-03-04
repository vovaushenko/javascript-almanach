const util = require('util');

const sum = (a, b, c) => a + b + c;

const promisifiedSum = util.promisify(sum);

promisifiedSum(1, 2).then((res) => console.log(res));
