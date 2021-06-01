// async

// The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior.

// The async attribute means that a script is completely independent:

// 1️⃣ The browser doesn’t block on async scripts (like defer).

// 2️⃣ Other scripts don’t wait for async scripts, and async scripts don’t wait for them.
// 3️⃣ DOMContentLoaded and async scripts don’t wait for each other:
// 4️⃣ DOMContentLoaded may happen both before an async script (if an async script finishes loading after the page is complete)
// 5️⃣…or after an async script (if an async script is short or was in HTTP-cache)

// In other words, async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded. As simple, as it can get, right?

// Here’s an example similar to what we’ve seen with defer: two scripts long.js and small.js, but now with async instead of defer.

// They don’t wait for each other. Whatever loads first (probably small.js) – runs first:

// <p>...content before scripts...</p>

{
  /* <script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...content after scripts...</p> */
}

// 1️⃣ The page content shows up immediately: async doesn’t block it.
// 2️⃣ DOMContentLoaded may happen both before and after async, no guarantees here.
// 3️⃣ A smaller script small.js goes second, but probably loads before long.js, so small.js runs first. Although, it might be that long.js loads first, if cached, then it runs first. In other words, async scripts run in the “load-first” order.

// Async scripts are great when we integrate an independent third-party script into the page: counters, ads and so on, as they don’t depend on our scripts, and our scripts shouldn’t wait for them:
