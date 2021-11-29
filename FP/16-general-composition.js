/*
If we can define the composition of two functions, we can just keep going to support
composing any number of functions. The general data visualization flow for any

number of functions being composed looks like this:

finalValue <-- func1 <-- func2 <-- ... <-- funcN <-- origValue
*/

//!We can implement a general compose(..) utility like this:

var compose =
	(...fns) =>
	(result) => {
		var list = [...fns];
		while (list.length > 0) {
			// take the last function off the end of the list
			// and execute it
			result = list.pop()(result);
		}
		return result;
	};

const lower = (str) => str.toLowerCase();
const upper = (str) => str.toUpperCase();
const words = (str) => str.split(' ');

const text =
	'To compose two functions together, pass the \
output of the first function call as the input of the \
second function call.';

const uppercaseWords = compose(words, upper, lower);

const res = uppercaseWords(text);
console.log(res);
