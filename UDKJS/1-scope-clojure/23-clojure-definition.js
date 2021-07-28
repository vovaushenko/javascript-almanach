// We're now ready to define closure:

//! Closure is observed when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn't be accessible.

// The key parts of this definition are:

// Must be a function involved

// Must reference at least one variable from an outer scope

// Must be invoked in a different branch of the scope chain from the variable(s)
