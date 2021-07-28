// We explored two models for mentally tackling closure:

//! Observational: closure is a function instance remembering its outer variables even as that function is passed to and invoked in other scopes.

//! Implementational: closure is a function instance and its scope environment preserved in-place while any references to it are passed around and invoked from other scopes.

// Summarizing the benefits to our programs:

// Closure can improve efficiency by allowing a function instance to remember previously determined information instead of having to compute it each time.

// // Closure can improve code readability, bounding scope-exposure by encapsulating variable(s) inside function instances, while still making sure the information in those variables is accessible for future use. The resultant narrower, more specialized function instances are cleaner to interact with, since the preserved information doesn't need to be passed in every invocation.
