// There’s one more important way of adding a script to the page.

// We can create a script and append it to the document dynamically using JavaScript:

let script = document.createElement('script');
script.src = '/article/script-async-defer/long.js';
document.body.append(script); // (*)

// The script starts loading as soon as it’s appended to the document (*).

//  ❗❗❗ Dynamic scripts behave as “async” by default. ❗❗❗

// 1️⃣ They don’t wait for anything, nothing waits for them.
// 2️⃣ The script that loads first – runs first (“load-first” order).

// This can be changed if we explicitly set script.async=false.
