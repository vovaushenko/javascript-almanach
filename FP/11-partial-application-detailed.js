/*
If a function takes multiple arguments, you may want to specify some of those up
front and leave the rest to be specified later.
Consider this function:
*/

const ajax = (url, data, callback) => {};

//! What we’re going to do is make a new function that still calls ajax(..) under the
//!covers, and it manually sets the first argument to the API URL you care about, while
//!waiting to accept the other two arguments later:

const getPersonInfo = (data, cb) => ajax('api/person', data, cb);
const getOrder = (data, cb) => ajax('api/orders', data, cb);

//! Manually specifying these function call wrappers is certainly possible, but it may
// get quite tedious, especially if there will also be variations with different arguments
// preset, like:

const getCurrentUser = (cb) => getPersonInfo({ user: 'COOL_USER' }, cb);

//* One practice an FPer gets very used to is looking for patterns where we do the same
//* sorts of things repeatedly, and trying to turn those actions into generic reusable
//* utilities.

//! --------- PARTIAL APPLICATION ---------

const partial =
	(fn, ...presentArgs) =>
	(...laterArgs) =>
		fn(...presentArgs, ...laterArgs);

function oldSchoolPartial(fn, ...presetArgs) {
	return function partiallyApplied(...laterArgs) {
		return fn(...presetArgs, ...laterArgs);
	};
}
// The partial(..) function takes an fn for which function we are partially applying.
// Then, any subsequent arguments passed in are gathered into the presetArgs array and saved for later
// When the partiallyApplied(..) function is later executed somewhere else in
// your program, it uses the closed over fn to execute the original function

const sum = (...args) => args.reduce((a, b) => a + b, 0);

const onePlusTwoPlus = partial(sum, 1, 2);

console.log(onePlusTwoPlus(3)); //6
console.log(onePlusTwoPlus(4, 5)); // 12

var getSomePerson = partial(ajax, 'http://some.api/person');
var getSomeOrder = partial(ajax, 'http://some.api/order');
var getSomeCurrentUser = partial(getSomePerson, { user: 'SOME_ID_12345' });

//! ----------------------- PARTIAL APP WITH MAP-----------------------------------------

const add = (x, y) => x + y;

const arr = [1, 2, 3, 4, 5];

const arrPlusOne = arr.map((num) => add(num, 1));
console.log(arrPlusOne);

//* or with partial

const arrPlusTen = arr.map(partial(add, 10));
console.log(arrPlusTen);

//! ------------- BIND(..) --------------

//* JavaScript functions all have a built-in utility called bind(..) . It has two capabili-
//* ties: presetting the this context and partially applying arguments.

const getPerson = ajax.bind(null, 'http://some.api/person');
