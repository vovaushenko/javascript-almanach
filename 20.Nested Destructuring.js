let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

let {
  size: { width, height },
  items: [item1, item2],
} = options;

console.log(width, height, item1, item2);
