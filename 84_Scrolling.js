// The scroll event allows reacting to a page or element scrolling. There are quite a few good things we can do here.

// For instance:

// Show/hide additional controls or information depending on where in the document the user is.
// Load more data when the user scrolls down till the end of the page.

window.addEventListener('scroll', function () {
  console.log(window.pageYOffset + 'px');
  let scrollHeight = window.pageYOffset;
  document.getElementById('showScroll').innerHTML = scrollHeight + 'px';

  if (scrollHeight > 100) document.body.style.backgroundColor = 'yellow';
  if (scrollHeight > 200) document.body.style.backgroundColor = 'green';
});

// 🟢 Prevent scrolling  🟢

// We can’t prevent scrolling by using event.preventDefault() in onscroll listener, because it triggers after the scroll has already happened.

// ❗❗❗But we can prevent scrolling by event.preventDefault() on an event that causes the scroll, for instance keydown event for pageUp and pageDown.

// ❗❗❗There are many ways to initiate a scroll, so it’s more reliable to use CSS, overflow property.
