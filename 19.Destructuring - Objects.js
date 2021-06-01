// 🟢🟢🟢🟢🟢🟢🟢Object destructuring🟢🟢🟢🟢🟢🟢🟢

let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

let { title, width, height } = options;

let options1 = {
  title: 'Menu',
  width: 100,
  height: 200,
};

let { width: w, height: h } = options1;

console.log(w, h);

// For potentially missing properties we can set default values using "=", like this:

let options3 = {
  title1: 'Menu',
};

let { title1, width1 = 100, height1 = 200 } = options3;

// We also can combine both the colon and equality:

let options4 = {
  title: 'Menu',
};

let { width4: w4 = 100, height4: h4 = 200, title4 } = options4;

// The rest pattern “…”
let options5 = {
  title: 'Menu',
  height: 200,
  width: 100,
};

let { title5, ...rest } = options;

console.log(rest);
