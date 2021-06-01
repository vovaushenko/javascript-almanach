// Instead of func.call(this, ...arguments) we could use func.apply(this, arguments).

// The syntax of built-in method func.apply is:
// func.apply(context, args)

// call forwarding
let wrapper = function () {
  return func.apply(this, arguments);
};
