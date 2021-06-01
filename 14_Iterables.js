// Iterables
// Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop.

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values

  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// works!
for (let num of range) console.log(num);
