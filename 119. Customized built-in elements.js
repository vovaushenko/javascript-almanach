// New elements that we create, such as <time-formatted>, don’t have any associated semantics. They are unknown to search engines, and accessibility devices can’t handle them.

// But such things can be important. E.g, a search engine would be interested to know that we actually show a time. And if we’re making a special kind of button, why not reuse the existing <button> functionality?

// We can extend and customize built-in HTML elements by inheriting from their classes.

// For example, buttons are instances of HTMLButtonElement, let’s build upon it.

// 1️⃣ Extend HTMLButtonElement with our class:

class HelloButton extends HTMLButtonElement {
	/* custom element methods */
}

// 2️⃣ Provide the third argument to customElements.define, that specifies the tag:

customElements.define('hello-button', HelloButton, { extends: 'button' });

// 3️⃣ At the end, to use our custom element, insert a regular <button> tag, but add is="hello-button" to it:

<button is="hello-button">...</button>;

// Here’s a full example:

/*

<script>
// The button that says "hello" on click
class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => alert("Hello!"));
  }
}

customElements.define('hello-button', HelloButton, {extends: 'button'});
</script>

<button is="hello-button">Click me</button>

<button is="hello-button" disabled>Disabled</button>
*/
