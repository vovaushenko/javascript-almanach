// 🟢🟢🟢  Event handlers   🟢🟢🟢
// To react on events we can assign a handler – a function that runs in case of an event.
// Handlers are a way to run JavaScript code in case of user actions.

//There are several ways to assign a handler. Let’s see them, starting from the simplest one.

// 🟢HTML-attribute🟢

<input value="Click me" onclick="alert('Click!')" type="button"></input>;

// An HTML-attribute is not a convenient place to write a lot of code, so we’d better create a JavaScript function and call it there.

const countRabbits = () => {
  for (let i = 0; i < 2; i++) {
    console.log('rabbit number' + i);
  }
};
const rabitsBtn = document.querySelector('#rabits-btn');
rabitsBtn.onclick = countRabbits;
/////////////////////////////////////////////////////////////////////////////

//🟢 DOM property🟢
// We can assign a handler using a DOM property on<event>.
// For instance, elem.onclick:

// These two code pieces work the same:
<input type="button" onclick="alert('Click!')" value="Button"></input>;

// <input type="button" id="button" value="Button">
{
  /* <script>
  button.onclick = function() {
    alert('Click!');
  };
</script> */
}
//////////////////////////////////////////////////////////////////////

//🟢 Accessing the element: this 🟢

// The value of this inside a handler is the element. The one which has the handler on it.
// In the code below button shows its contents using this.innerHTML:

<button onclick="alert(this.innerHTML)">Click me</button>;
