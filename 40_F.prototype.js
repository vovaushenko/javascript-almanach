// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

// that F.prototype here means a regular property named "prototype" on F. It sounds something similar to the term “prototype”, but here we really mean a regular property with this name.

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal; // F prototype

let rabbit = new Rabbit('White rabbit');
console.log(rabbit.eats);
