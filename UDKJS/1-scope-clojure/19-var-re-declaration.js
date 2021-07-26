//! Re-declaration

let studentName = 'Frank';
console.log(studentName);
// Frank

let studentName;
console.log(studentName); //!Frank

// What do you expect to be printed for that second message? Many believe the second var studentName has re-declared the variable (and thus "reset" it), so they expect undefined to be printed.

//! But is there such a thing as a variable being "re-declared" in the same scope? No.

//* In the style of the conversation narrative from Chapter 2, Compiler would find the second var declaration statement and ask the Scope Manager if it had already seen a studentName identifier; since it had, there wouldn't be anything else to do.

var studentName = 'Frank';
console.log(studentName); // Frank

var studentName;
console.log(studentName); // Frank <--- still!

// let's add the initialization explicitly
var studentName = undefined;
console.log(studentName);
