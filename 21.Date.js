let now = new Date();
console.log(now);

let date = new Date('2017-01-26');

console.log(date);

// Access date components
// getFullYear()
// Get the year (4 digits)
// getMonth()
// Get the month, from 0 to 11.
// getDate()
// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Get the corresponding time components.

let date1 = new Date();
console.log(date1.getHours());
console.log(date1.getDay());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getTime());

// Date.now()
// If we only want to measure time, we don’t need the Date object.

// There’s a special method Date.now() that returns the current timestamp.

let start = Date.now();

for (let i = 0; i < 1000000; i++) {
  let calculate = i ** 4;
}

let end = Date.now();

console.log(`the loop took = ${end - start} ms`);
