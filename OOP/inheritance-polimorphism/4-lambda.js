class Rect {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	toString() {
		return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
	}
}

// this function overloads constructor
const equliateral = (Category) =>
	class extends Category {
		constructor(x, y, side) {
			super(x, y, side, side);
		}
	};

// this function adds to string method
const serializable = (Category) =>
	class extends Category {
		toString() {
			return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
		}
	};

const measurable = (Category) =>
	class extends Category {
		get area() {
			return this.width * this.height;
		}
	};

const movable = (Category) =>
	class extends Category {
		move(x, y) {
			this.x += x;
			this.y += y;
		}
	};

const scalable = (Category) =>
	class extends Category {
		scale(k) {
			const x = (this.width * k) / 2;
			const y = (this.height * k) / 2;
			this.width += x;
			this.height += x;
			this.x -= x;
			this.y -= y;
		}
	};

// Utils

const pipe =
	(...fns) =>
	(x) =>
		fns.reduce((v, f) => f(v), x);

// Use
const Square1 = equliateral(serializable(measurable(movable(scalable(Rect)))));

// toSquare is a function that is capable of transforming and enhancing Rect class
const toSquare = pipe(equliateral, serializable, measurable, movable, scalable);

const Square2 = toSquare(Rect);

const p1 = new Square1(10, 20, 50);
console.log(p1.toString());
console.log(p1.area);
console.log(p1.scale(1.2));
console.log(p1.toString());

console.log('=================');
const p2 = new Square2(10, 20, 50);
console.log(p2.toString());
console.log(p2.area);
console.log(p2.scale(1.2));
console.log(p2.toString());

// https://www.youtube.com/watch?v=8OuzIAuMfjw&list=PLHhi8ymDMrQZsPQhqTlK3cw5fsIXJX6C-&index=4
