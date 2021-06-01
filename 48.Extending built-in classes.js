// Built-in classes like Array, Map and others are extendable also.

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 3, 4, 5, 6, 7, 8);
console.log(arr);
console.log(arr.isEmpty());

const filteredArray = arr.filter((n) => n > 4);
console.log(filteredArray);
console.log(filteredArray.isEmpty());
// ❗❗❗❗ Built-in methods like filter, map and others – return new objects of exactly the inherited type PowerArray.
