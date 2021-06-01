// Macrotasks and Microtasks

// Along with macrotasks, described in this chapter, there are microtasks, mentioned in the chapter Microtasks.

// They are usually created by promises: an execution of .then/catch/finally handler becomes a microtask. Microtasks are used “under the cover” of await as well, as it’s another form of promise handling.

// There’s also a special function queueMicrotask(func) that queues func for execution in the microtask queue.

// ❗❗❗ Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else.

setTimeout(() => alert('timeout'));

Promise.resolve().then(() => alert('promise'));

alert('code');

//  code promise timeout

// 1️⃣ code shows first, because it’s a regular synchronous call.
// 2️⃣ promise shows second, because .then passes through the microtask queue, and runs after the current code.
// 3️⃣ timeout shows last, because it’s a macrotask.

// Summary
// A more detailed event loop algorithm (though still simplified compared to the specification):

// 1️⃣ Dequeue and run the oldest task from the macrotask queue (e.g. “script”).
// 2️⃣ Execute all microtasks:
// 3️⃣ While the microtask queue is not empty:
// 4️⃣ Dequeue and run the oldest microtask.
// 5️⃣ Render changes if any.
// 6️⃣ If the macrotask queue is empty, wait till a macrotask appears.
// 7️⃣ Go to step 1.

// ❗❗ To schedule a new macrotask: ❗❗

// Use zero delayed setTimeout(f).

// ❗❗ To schedule a new microtask ❗❗

// Use queueMicrotask(f).
// Also promise handlers go through the microtask queue.
