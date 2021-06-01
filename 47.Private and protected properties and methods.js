// One of the most important principles of object oriented programming – delimiting internal interface from the external one.

// 🟢🟢🟢🟢In object-oriented programming, properties and methods are split into two groups:🟢🟢🟢🟢

// 🟢Internal interface🟢 – methods and properties, accessible from other methods of the class, but not from the outside.
// 🟢External interface🟢 – methods and properties, accessible also from outside the class.

// In JavaScript, there are two types of object fields (properties and methods): public and private

class CoffeeMachine {
  waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;

console.log(coffeeMachine);

// 🟢🟢🟢🟢🟢rotected propertiesА🟢🟢🟢🟢

// Protected properties are usually prefixed with an underscore _.

class BetterCoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

let coffeeMachine2 = new BetterCoffeeMachine(100);

coffeeMachine2.waterAmount = -10; //error

console.log(coffeeMachine2);

// 🟢🟢🟢🟢🟢Read-only “power”🟢🟢🟢🟢

class CoffeeMachine3 {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

let coffeeMachine3 = new CoffeeMachine3(100);

coffeeMachine3.power = 500; // error -> no setter
console.log(`power is ${coffeeMachine3.power}`);

// But most of the time get.../set... functions are preferred, like this:

class CoffeeMachine4 {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

// 🟢🟢🟢🟢Protected fields are inherited🟢🟢🟢🟢

// 🟢🟢🟢🟢Private “#waterLimit”🟢🟢🟢🟢

// This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.

class CoffeeMachine5 {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}
// On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error

let coffeeMachine5 = new CoffeeMachine();

// can't access privates from outside of the class
// coffeeMachine5.#fixWaterAmount(123); // Error
// coffeeMachine5.#waterLimit = 1000; // Error

// For instance, let’s make waterAmount an accessor for #waterAmount:

class CoffeeMachine6 {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine6 = new CoffeeMachine();

machine6.waterAmount = 100;
console.log(machine.#waterAmount); // Error

// Private fields are not available as this[name]
