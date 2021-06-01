// The method str.replace(regexp, replacement) replaces matches found using regexp in string str with replacement (all matches if there’s flag g, otherwise, only the first one).

const phrase = 'We will, we will';

console.log(phrase.replace(/wE/gi, 'they')); //with g replace all

const firstWIllBeReplaced = phrase.replace(/wE/i, '🤢');

console.log(firstWIllBeReplaced);

/*
    
     ⭐ Action in the replacement string ⭐
*/

// Symbols
// $&	      inserts the whole match

// $`	      inserts a part of the string before the match

// $'	      inserts a part of the string after the match

// $n	      if n is a 1-2 digit number, then it inserts the contents of n-th parentheses, more about it in the chapter Capturing groups

// $<name>	    inserts the contents of the parentheses with the given name, more about it in the chapter Capturing groups

// $$	      inserts character $

// An example with $&:

console.log('I love HTML'.replace(/HTML/, '$& and JavaScript'));
