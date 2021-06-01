// We can create custom HTML elements, described by our class, with its own methods and properties, events and so on.

// https://javascript.info/custom-elements

//  There are no <easy-tabs>, <sliding-carousel>, <beautiful-upload>… Just think of any other tag we might need.

// There are two kinds of custom elements:

// 1️⃣ Autonomous custom elements – “all-new” elements, extending the abstract HTMLElement class.

// 2️⃣ Customized built-in elements – extending built-in elements, like a customized button, based on HTMLButtonElement etc.

// To create a custom element, we need to tell the browser several details about it: how to show it, what to do when the element is added or removed to page, etc.

// That’s done by making a class with special methods. That’s easy, as there are only few methods, and all of them are optional.

// Here’s a sketch with the full list:

class MyElement extends HTMLElement {
	constructor() {
		super();
		// element created
	}

	connectedCallback() {
		// browser calls this method when the element is added to the document
		// (can be called many times if an element is repeatedly added/removed)
	}

	disconnectedCallback() {
		// browser calls this method when the element is removed from the document
		// (can be called many times if an element is repeatedly added/removed)
	}

	static get observedAttributes() {
		return [
			/* array of attribute names to monitor for changes */
		];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		// called when one of attributes listed above is modified
	}

	adoptedCallback() {
		// called when the element is moved to a new document
		// (happens in document.adoptNode, very rarely used)
	}

	// there can be other element methods and properties
}

// After that, we need to register the element:
// let the browser know that <my-element> is served by our new class
customElements.define('my-element', MyElement);

// Now for any HTML elements with tag <my-element>, an instance of MyElement is created, and the aforementioned methods are called. We also can document.createElement('my-element') in JavaScript.

// ❗❗❗ Custom element name must contain a hyphen -
// Custom element name must have a hyphen -, e.g. my-element and super-button are valid names, but myelement is not.❗❗❗

// ❗❗ Rendering in connectedCallback, not in constructor
// In the example above, element content is rendered (created) in connectedCallback.

// Why not in the constructor?

// The reason is simple: when constructor is called, it’s yet too early. The element is created, but the browser did not yet process/assign attributes at this stage: calls to getAttribute would return null. So we can’t really render there.
// The connectedCallback triggers when the element is added to the document. Not just appended to another element as a child, but actually becomes a part of the page. So we can build detached DOM, create elements and prepare them for later use. They will only be actually rendered when they make it into the page.
