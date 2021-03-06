// https://javascript.info/mutation-observer
// Mutation observer

// MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change.

// 1οΈβ£ First, we create an observer with a callback-function:

let observer = new MutationObserver(callback);

// 2οΈβ£ And then attach it to a DOM node:

observer.observe(node, config);

// π’ config is an object with boolean options βwhat kind of changes to react onβ:
// π’  childList β changes in the direct children of node,
// π’ subtree β in all descendants of node,
// π’ attributes β attributes of node,
// π’ attributeFilter β an array of attribute names, to observe only selected ones.
// π’ characterData β whether to observe node.data (text content),

// For example, hereβs a <div> with a contentEditable attribute. That attribute allows us to focus on it and edit.

// <div contentEditable id="elem">Click and <b>edit</b>, please</div>

let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords); // console.log(the changes)
});

// observe everything except attributes
observer.observe(elem, {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true, // pass old data to callback
});

// βββ So, MutationObserver allows to react on any changes within DOM subtree.

// π’π’π’ Usage for integration π’π’π’
// When such thing may be useful?

// Imagine the situation when you need to add a third-party script that contains useful functionality, but also does something unwanted, e.g. shows ads <div class="ads">Unwanted ads</div>.

// Naturally, the third-party script provides no mechanisms to remove it.

// ββ Using MutationObserver, we can detect when the unwanted element appears in our DOM and remove it. ββ

// π’π’π’ Usage for architecture π’π’π’

// There are also situations when MutationObserver is good from architectural standpoint.
