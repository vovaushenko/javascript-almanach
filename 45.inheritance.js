// 🟢🟢🟢Class inheritance🟢🟢🟢
// Class inheritance is a way for one class to extend another class.

// So we can create new functionality on top of the existing.

// The “extends” keyword
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal('My animal');

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit('White Rabbit');
rabbit.run(5);
rabbit.hide();

//🟢🟢🟢 Overriding a method🟢🟢🟢

// Classes provide "super" keyword for that.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).

class Wolf extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let wolf = new Wolf();

wolf.stop('Grey Wolf');

//🟢Arrow functions have no super🟢
