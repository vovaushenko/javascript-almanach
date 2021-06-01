// https://javascript.info/slots-composition

// 🟢🟢🟢 Summary🟢🟢
// ⭐ Usually, if an element has shadow DOM, then its light DOM is not displayed. Slots allow to show elements from light DOM in specified places of shadow DOM.

// There are two kinds of slots:

// ⭐Named slots: <slot name="X">...</slot> – gets light children with slot="X".
// ⭐Default slot: the first <slot> without a name (subsequent unnamed slots are ignored) – gets unslotted light children.
// ⭐If there are many elements for the same slot – they are appended one after another.
// ⭐The content of <slot> element is used as a fallback. It’s shown if there are no light children for the slot.

// The process of rendering slotted elements inside their slots is called “composition”. The result is called a “flattened DOM”.

// 🟢 Luckily, we don’t have to. Shadow DOM supports ❗<slot>❗ elements, that are automatically filled by the content from light DOM.

/*
========= 🟢 Named slots 🟢 ===========
*/
// Here, <user-card> shadow DOM provides two slots, filled from light DOM:
customElements.define(
	'user-card',
	class extends HTMLElement {
		connectedCallback() {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.innerHTML = `
      <div>Name:
        <slot name="username"></slot>
      </div>
      <div>Birthday:
        <slot name="birthday"></slot>
      </div>
    `;
		}
	}
);

/*
user-card>
  <span slot="username">John Smith</span>
  <span slot="birthday">01.01.2001</span>
</user-card>
*/

// Name: John Smith
// Birthday: 01.01.2001

// In the shadow DOM, <slot name="X"> defines an “insertion point”, a place where elements with slot="X" are rendered.

// ❗❗❗ Then the browser performs “composition”: it takes elements from the light DOM and renders them in corresponding slots of the shadow DOM. At the end, we have exactly what we want – a component that can be filled with data. ❗❗❗

// ❗❗ For rendering purposes, for each <slot name="..."> in shadow DOM, the browser looks for slot="..." with the same name in the light DOM. These elements are rendered inside the slots:

// ❗❗ The result is called ❗“flattened”❗ DOM:
/*
<user-card>
  #shadow-root
    <div>Name:
      <slot name="username">
        <!-- slotted element is inserted into the slot -->
        <span slot="username">John Smith</span>
      </slot>
    </div>
    <div>Birthday:
      <slot name="birthday">
        <span slot="birthday">01.01.2001</span>
      </slot>
    </div>
</user-card>*/
// …But the flattened DOM exists only for rendering and event-handling purposes. It’s kind of “virtual”. That’s how things are shown. But the nodes in the document are actually not moved around!

// So, the flattened DOM is derived from shadow DOM by inserting slots. The browser renders it and uses for style inheritance, event propagation (more about that later). But JavaScript still sees the document “as is”, before flattening.

// 🟢 Slot fallback content
// If we put something inside a <slot>, it becomes the fallback, “default” content. The browser shows it if there’s no corresponding filler in light DOM.

// For example, in this piece of shadow DOM, Anonymous renders if there’s no slot="username" in light DOM.

<div>
	Name:
	<slot name="username">Anonymous</slot>
</div>;

// 🟢 Slot API

// As we’ve seen before, JavaScript looks at the “real” DOM, without flattening. But, if the shadow tree has {mode: 'open'}, then we can figure out which elements assigned to a slot and, vise-versa, the slot by the element inside it:

// ⭐ node.assignedSlot – returns the <slot> element that the node is assigned to.
// ⭐ slot.assignedNodes({flatten: true/false}) – DOM nodes, assigned to the slot. The flatten option is false by default. If explicitly set to true, then it looks more deeply into the flattened DOM, returning nested slots in case of nested components and the fallback content if no node assigned.
// ⭐ slot.assignedElements({flatten: true/false}) – DOM elements, assigned to the slot (same as above, but only element nodes).
