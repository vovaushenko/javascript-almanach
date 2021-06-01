// Web Workers
// For long heavy calculations that shouldn’t block the event loop, we can use Web Workers.

// That’s a way to run code in another, parallel thread.

// Web Workers can exchange messages with the main process, but they have their own variables, and their own event loop.

// Web Workers do not have access to DOM, so they are useful, mainly, for calculations, to use multiple CPU cores simultaneously.
