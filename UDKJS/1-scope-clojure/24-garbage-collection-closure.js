//! This has an important impact on building efficient and performant programs. Closure can unexpectedly prevent the GC of a variable that you're otherwise done with, which leads to run-away memory usage over time. That's why it's important to discard function references (and thus their closures) when they're not needed anymore.

function manageBtnClickEvents(btn) {
	var clickHandlers = [];

	return function listener(cb) {
		if (cb) {
			let clickHandler = function onClick(evt) {
				console.log('clicked!');
				cb(evt);
			};
			clickHandlers.push(clickHandler);
			btn.addEventListener('click', clickHandler);
		} else {
			// passing no callback unsubscribes
			// all click handlers
			for (let handler of clickHandlers) {
				btn.removeEventListener('click', handler);
			}

			clickHandlers = [];
		}
	};
}

// var mySubmitBtn = ..
var onSubmit = manageBtnClickEvents(mySubmitBtn);

onSubmit(function checkout(evt) {
	// handle checkout
});

onSubmit(function trackAction(evt) {
	// log action to analytics
});

// later, unsubscribe all handlers:
onSubmit();

//* In this program, the inner onClick(..) function holds a closure over the passed in cb (the provided event callback). That means the checkout() and trackAction() function expression references are held via closure (and cannot be GC'd) for as long as these event handlers are subscribed.

// When we call onSubmit() with no input on the last line, all event handlers are unsubscribed, and the clickHandlers array is emptied. Once all click handler function references are discarded, the closures of cb references to checkout() and trackAction() are discarded.

// When considering the overall health and efficiency of the program, unsubscribing an event handler when it's no longer needed can be even more important than the initial subscription!
