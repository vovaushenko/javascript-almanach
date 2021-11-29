/*
 * Functions come in a variety of shapes and sizes. And we can define a certain
 * combination of them to make a new compound function that will be handy in various
 * parts of the program. This process of using functions together is called composition.
 */

//!   ==== Output to Input ====

/*
To compose two functions together, pass the output of the first function call as the in-
put of the second function call. In map(unary(parseInt)) , the unary(parseInt)
call returns a value (a function); that value is directly passed as an argument to
map(..) , which returns an array.
*/

/*
arrayValue <-- map <-- unary <-- parseInt
parseInt is the input to unary(..) . The output of unary(..) is the input
to map(..) . The output of map(..) is arrayValue . This is the composition of
map(..) and unary(..) .
*/

const unique = (wrds) => 'finds unique words';
const words = (str) => 'transforms str into words';

var wordsUsed = unique(words(text));

//! COMBINING
/*
Relating back to the code: we now realize that the pairing of words(..) and
unique(..) in that specific order of execution (think: compound Lego) is something
we could use in several other parts of our application. So, let’s define a compound
function that combines them:
*/

const uniqueWords = (str) => unique(words(str));

//! == MACHINE MAKING ==
//! COMPOSE FACTORY || COMPOSE 2

const compose2 = (fn2, fn1) => (originalValue) => fn2(fn1(originalValue));

var uniqueWords = compose2(unique, words);
/*
Did you notice that we defined the parameter order as fn2,fn1 , and furthermore
that it’s the second function listed (aka fn1 parameter name) that runs first, then the
first function listed ( fn2 )? In other words, the functions compose from right-to-left.
That may seem like a strange choice, but there are some reasons for it. Most typical
FP libraries define their compose(..) to work right-to-left in terms of ordering, so
we’re sticking with that convention.
*/
