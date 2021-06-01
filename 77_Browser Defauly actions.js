// Many events automatically lead to certain actions performed by the browser.

// For instance:

// A click on a link – initiates navigation to its URL.
// A click on a form submit button – initiates its submission to the server.
// Pressing a mouse button over a text and moving it – selects the text.

// 🟢  Preventing browser actions  🟢

// There are two ways to tell the browser we don’t want it to act:
// 🟢The main way is to use the event object. There’s a method event.preventDefault().
// 🟢If the handler is assigned using on<event> (not by addEventListener), then returning false also works the same.
{
  /* <a href="/" onclick="return false">Click here</a>
<a href="/" onclick="event.preventDefault()">here</a> */
}

<ul id="menu" class="menu">
  <li>
    <a href="/html">HTML</a>
  </li>
  <li>
    <a href="/javascript">JavaScript</a>
  </li>
  <li>
    <a href="/css">CSS</a>
  </li>
</ul>;

menu.onclick = function (event) {
  if (event.target.nodeName != 'A') return;

  let href = event.target.getAttribute('href');
  alert(href); // ...can be loading from the server, UI generation etc

  return false; // prevent browser action (don't go to the URL)
};
