// Event loop: microtasks and macrotasks

// Browser JavaScript execution flow, as well as in Node.js, is based on an event loop.

// 🟢 Event Loop 🟢

// The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

// ❗ The general algorithm of the engine:

// 1️⃣While there are tasks:
//             execute them, starting with the oldest task.
// 2️⃣Sleep until a task appears, then go to 1.

// Tasks are set – the engine handles them – then waits for more tasks (while sleeping and consuming close to zero CPU).

// ❗ It may happen that a task comes while the engine is busy, then it’s enqueued.

// The tasks form a queue, so-called “macrotask queue” (v8 term):

// For instance, while the engine is busy executing a script, a user may move their mouse causing mousemove, and setTimeout may be due and so on, these tasks form a queue, as illustrated on the picture above.

// Tasks from the queue are processed on “first come – first served” basis. When the engine browser is done with the script, it handles mousemove event, then setTimeout handler, and so on.

// ❗❗❗ Two more details: ❗❗❗

// 1️⃣ Rendering never happens while the engine executes a task. It doesn’t matter if the task takes a long time. Changes to the DOM are painted only after the task is complete.

// 2️⃣ If a task takes too long, the browser can’t do other tasks, such as processing user events. So after a time, it raises an alert like “Page Unresponsive”, suggesting killing the task with the whole page. That happens when there are a lot of complex calculations or a programming error leading to an infinite loop.
