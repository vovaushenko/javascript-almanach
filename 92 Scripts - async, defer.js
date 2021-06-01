// 🟢 Scripts: async, defer 🟢

// In modern websites, scripts are often “heavier” than HTML: their download size is larger, and processing time is also longer.

// When the browser loads HTML and comes across a <script>...</script> tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts <script src="..."></script>: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

// ❗ That leads to two important issues:
// 1️⃣ Scripts can’t see DOM elements below them, so they can’t add handlers etc.
// 2️⃣ If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:

// There are some workarounds to that. For instance, we can put a script at the bottom of the page.

// But this solution is far from perfect. For example, the browser notices the script (and can start downloading it) only after it downloaded the full HTML document. For long HTML documents, that may be a noticeable delay.

// Such things are invisible for people using very fast connections, but many people in the world still have slow internet speeds and use a far-from-perfect mobile internet connection.

// 🟢🟢🟢 defer 🟢🟢🟢
// The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

// In other words:

// 1️⃣ Scripts with defer never block the page.
// 2️⃣ Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

// ❗ Deferred scripts keep their relative order, just like regular scripts.
// Let’s say, we have two deferred scripts: the long.js and then small.js:
{
  /* <script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script> */
}

// Browsers scan the page for scripts and download them in parallel, to improve performance. So in the example above both scripts download in parallel. The small.js probably finishes first.

// But the defer attribute, besides telling the browser “not to block”, ensures that the relative order is kept. So even though small.js loads first, it still waits and runs after long.js executes.
