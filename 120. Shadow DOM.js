// Shadow DOM serves for encapsulation. It allows a component to have its very own “shadow” DOM tree, that can’t be accidentally accessed from the main document, may have local style rules, and more.

// Summary

// 🟢Shadow DOM is a way to create a component-local DOM.

// 1️⃣shadowRoot = elem.attachShadow({mode: open|closed}) – creates shadow DOM for elem. If mode="open", then it’s accessible as elem.shadowRoot property.
// 2️⃣We can populate shadowRoot using innerHTML or other DOM methods.

// 🟢Shadow DOM elements:

// 🌟Have their own ids space,
// 🌟Invisible to JavaScript selectors from the main document, such as querySelector,
// 🌟Use styles only from the shadow tree, not from the main document.

/*
 *
 *     🟢 Built-in shadow DOM
 *
 */

// Did you ever think how complex browser controls are created and styled?

// Such as <input type="range">:

// The browser uses DOM/CSS internally to draw them. That DOM structure is normally hidden from us, but we can see it in developer tools. E.g. in Chrome, we need to enable in Dev Tools “Show user agent shadow DOM” option.

// What you see under #shadow-root is called “shadow DOM”.

// We can’t get built-in shadow DOM elements by regular JavaScript calls or selectors. These are not regular children, but a powerful encapsulation technique.

// In the example above, we can see a useful attribute pseudo. It’s non-standard, exists for historical reasons. We can use it style subelements with CSS, like this:

// Once again, pseudo is a non-standard attribute. Chronologically, browsers first started to experiment with internal DOM structures to implement controls, and then, after time, shadow DOM was standardized to allow us, developers, to do the similar thing.

/*
 *
 *     🟢 Shadow tree
 */

// A DOM element can have two types of DOM subtrees:

// 1️⃣ Light tree – a regular DOM subtree, made of HTML children. All subtrees that we’ve seen in previous chapters were “light”.

// 2️⃣ Shadow tree – a hidden DOM subtree, not reflected in HTML, hidden from prying eyes.

// ❗❗❗ If an element has both, then the browser renders only the shadow tree. But we can setup a kind of composition between shadow and light trees as well. We’ll see the details later in the chapter Shadow DOM slots, composition.

// Shadow tree can be used in Custom Elements to hide component internals and apply component-local styles.

// For example, this <show-hello> element hides its internal DOM in shadow tree:

customElements.define(
	'show-hello',
	class extends HTMLElement {
		connectedCallback() {
			const shadow = this.attachShadow({ mode: 'open' });
			shadow.innerHTML = `<p>
      Hello, ${this.getAttribute('name')}
    </p>`;
		}
	}
);

// There are two limitations:

// 1️⃣ We can create only one shadow root per element.
// 2️⃣ The elem must be either a custom element, or one of: “article”, “aside”, “blockquote”, “body”, “div”, “footer”, “h1…h6”, “header”, “main” “nav”, “p”, “section”, or “span”. Other elements, like <img>, can’t host shadow tree.

/*
 *
 *     🟢 Encapsulation
 */

// Shadow DOM is strongly delimited from the main document:

// 1️⃣ Shadow DOM elements are not visible to querySelector from the light DOM. In particular, Shadow DOM elements may have ids that conflict with those in the light DOM. They must be unique only within the shadow tree.
// 2️⃣ Shadow DOM has own stylesheets. Style rules from the outer DOM don’t get applied.
