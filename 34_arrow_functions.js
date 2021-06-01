//  💚💚💚 Arrow functions have no “this” 💚💚💚

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  showList() {
    this.students.forEach((student) => console.log(this.title + ' ' + student));
  },
};

group.showList();

//   🟢🟢🟢Arrow functions VS bind🟢🟢🟢

// There’s a subtle difference between an arrow function => and a regular function called with .bind(this):

// .bind(this) creates a “bound version” of the function.
// The arrow => doesn’t create any binding. The function simply doesn’t have this. The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.
