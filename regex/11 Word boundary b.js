// https://javascript.info/regexp-boundary

// A word boundary \b is a test, just like ^ and $.

// There are three different positions that qualify as word boundaries:

// 1️⃣ At string start, if the first string character is a word character \w.

// 2️⃣ Between two characters in the string, where one is a word character \w and the other is not.

// 3️⃣ At string end, if the last string character is a word character \w.

// For instance, regexp \bJava\b will be found in Hello, Java!, where Java is a standalone word, but not in Hello, JavaScript!.

console.log('Hello, Java!'.match(/\bJava\b/)); // Java
console.log('Hello, JavaScript!'.match(/\bJava\b/)); // null

console.log('Hello, Java!'.match(/\bHello\b/)); // Hello
console.log('Hello, Java!'.match(/\bJava\b/)); // Java
console.log('Hello, Java!'.match(/\bHell\b/)); // null (no match)
console.log('Hello, Java!'.match(/\bJava!\b/)); // null (no match)

// We can use \b not only with words, but with digits as well.

// For example, the pattern \b\d\d\b looks for standalone 2-digit numbers. In other words, it looks for 2-digit numbers that are surrounded by characters different from \w, such as spaces or punctuation (or text start/end).

console.log('1 23 456 78'.match(/\b\d\d\b/g)); // 23,78
console.log('12,34,56'.match(/\b\d\d\b/g)); // 12,34,56
