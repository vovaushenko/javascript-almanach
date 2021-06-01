// 📗📗📗 Optional chaining '?.' 📗📗📗
// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

let user = {};

// console.log(user.name); //undefined
// console.log(user.name.address) //error

// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

console.log(user?.address?.name); // no error

// Other variants: ?.(), ?.[]

let userAdmin = {
  admin() {
    console.log('I am admin');
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing (no such method)
