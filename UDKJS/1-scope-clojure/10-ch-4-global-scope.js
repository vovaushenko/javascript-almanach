//! Why Global Scope?

// It's likely no surprise to readers that most applications are composed of multiple (sometimes many!) individual JS files. So how exactly do all those separate files get stitched together in a single runtime context by the JS engine?

//* With respect to browser-executed applications, there are three main ways.

//* 1️⃣ First, if you're directly using ES modules (not transpiling them into some other module-bundle format), these files are loaded individually by the JS environment. Each module then imports references to whichever other modules it needs to access. The separate module files cooperate with each other exclusively through these shared imports, without needing any shared outer scope.

//* 2️⃣ Second, if you're using a bundler in your build process, all the files are typically concatenated together before delivery to the browser and JS engine, which then only processes one big file. Even with all the pieces of the application co-located in a single file, some mechanism is necessary for each piece to register a name to be referred to by other pieces, as well as some facility for that access to occur.

//! In some build setups, the entire contents of the file are wrapped in a single enclosing scope, such as a wrapper function, universal module (UMD—see Appendix A), etc. Each piece can register itself for access from other pieces by way of local variables in that shared scope. For example:
(function wrappingOuterScope() {
	var moduleOne = (function one() {
		// ..
	})();

	var moduleTwo = (function two() {
		// ..

		function callModuleOne() {
			moduleOne.someMethod();
		}

		// ..
	})();
})();

// As shown, the moduleOne and moduleTwo local variables inside the wrappingOuterScope() function scope are declared so that these modules can access each other for their cooperation.

// While the scope of wrappingOuterScope() is a function and not the full environment global scope, it does act as a sort of "application-wide scope," a bucket where all the top-level identifiers can be stored, though not in the real global scope. It's kind of like a stand-in for the global scope in that respect.

//* 3️⃣ And finally, the third way: whether a bundler tool is used for an application, or whether the (non-ES module) files are simply loaded in the browser individually (via <script> tags or other dynamic JS resource loading), if there is no single surrounding scope encompassing all these pieces, the global scope is the only way for them to cooperate with each other:

//! A bundled file of this sort often looks something like this:
var moduleOne = (function one() {
	// ..
})();
var moduleTwo = (function two() {
	// ..

	function callModuleOne() {
		moduleOne.someMethod();
	}

	// ..
})();
