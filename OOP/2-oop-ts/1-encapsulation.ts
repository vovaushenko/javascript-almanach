class Rectangle {
	private _width: number;
	private _height: number;

	constructor(w: number, private h: number) {
		this._width = w;
		this._height = h;
	}
	get width() {
		return this._width;
	}
	set width(value: number) {
		if (value <= 0) throw 'Width cannot be negative';
		this._width = value;
	}
	get height() {
		return this._height;
	}
	set height(value: number) {
		if (value <= 0) throw 'Height cannot be negative';
		this._height = value;
	}

	area() {
		return this._width * this._height;
	}
	perimeter() {}
}

const rect1 = new Rectangle(5, 5);
console.log(rect1.perimeter);
console.log(rect1.height);
console.log(rect1.width);
