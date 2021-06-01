// That was the theory. Now let’s see how we can apply that knowledge.

//   1️⃣ Use-case 11️⃣: splitting CPU-hungry tasks

// Let’s say we have a CPU-hungry task.

// For example, syntax-highlighting (used to colorize code examples on this page) is quite CPU-heavy. To highlight the code, it performs the analysis, creates many colored elements, adds them to the document – for a large amount of text that takes a lot of time.

// While the engine is busy with syntax highlighting, it can’t do other DOM-related stuff, process user events, etc. It may even cause the browser to “hiccup” or even “hang” for a bit, which is unacceptable.

// We can avoid problems by splitting the big task into pieces. Highlight first 100 lines, then schedule setTimeout (with zero-delay) for the next 100 lines, and so on.

// To demonstrate this approach, for the sake of simplicity, instead of text-highlighting, let’s take a function that counts from 1 to 1000000000.

// If you run the code below, the engine will “hang” for some time. For server-side JS that’s clearly noticeable, and if you are running it in-browser, then try to click other buttons on the page – you’ll see that no other events get handled until the counting finishes.

let i = 0;

let start = Date.now();

function count() {
  // do a heavy job
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  alert('Done in ' + (Date.now() - start) + 'ms');
}

count();

// ❗ Let’s split the job using nested setTimeout calls: ❗

let i = 0;

let start = Date.now();

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert('Done in ' + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // schedule the new call (**)
  }
}

count();

// Finally, we’ve split a CPU-hungry task into parts – now it doesn’t block the user interface. And its overall execution time isn’t much longer.

// ===========================================================//

//  2️⃣ Use case 2 2️⃣: progress indication

// Another benefit of splitting heavy tasks for browser scripts is that we can show progress indication.

// As mentioned earlier, changes to DOM are painted only after the currently running task is completed, irrespective of how long it takes.

// On one hand, that’s great, because our function may create many elements, add them one-by-one to the document and change their styles – the visitor won’t see any “intermediate”, unfinished state. An important thing, right?

// Here’s the demo, the changes to i won’t show up until the function finishes, so we’ll see only the last value:

// <div id="progress"></div>
function count() {
  for (let i = 0; i < 1e6; i++) {
    i++;
    progress.innerHTML = i;
  }
}

// If we split the heavy task into pieces using setTimeout, then changes are painted out in-between them.

// This looks prettier:

let i = 0;

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
    progress.innerHTML = i;
  } while (i % 1e3 != 0);

  if (i < 1e7) {
    setTimeout(count);
  }
}

count();

// 3️⃣ Use case 3 3️⃣: doing something after the event

// In an event handler we may decide to postpone some actions until the event bubbled up and was handled on all levels. We can do that by wrapping the code in zero delay setTimeout.

// In the chapter Dispatching custom events we saw an example: custom event menu-open is dispatched in setTimeout, so that it happens after the “click” event is fully handled.

menu.onclick = function () {
  // ...

  // create a custom event with the clicked menu item data
  let customEvent = new CustomEvent('menu-open', {
    bubbles: true,
  });

  // dispatch the custom event asynchronously
  setTimeout(() => menu.dispatchEvent(customEvent));
};
