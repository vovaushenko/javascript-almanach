class Person {
	private _name: string;
	private _age: number;
	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}

	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}

	get age(): number {
		return this._age;
	}
	set age(value: number) {
		if (value < 0) throw 'Age cannot be negative';
		this._age = value;
	}
}

class Employee extends Person {
	private _sin: string;

	constructor(name: string, age: number, sin: string) {
		super(name, age);
		this._sin = sin;
	}

	get sin() {
		return this._sin;
	}
	set sin(value: string) {
		if (!this._isValidSin(value)) throw 'Invalid sin';
		this._sin = value;
	}

	private _isValidSin(value: string) {
		return value.includes('sin');
	}
}

const employee1 = new Employee('vova', 15, '123213211');

employee1.sin = 'sin213121321321';
console.log({ employee1 });

type ProgrammingSpecialty = 'backend' | 'frontend' | 'devops' | 'full-stack';

class Developer extends Employee {
	private _specialty: ProgrammingSpecialty;
	constructor(
		name: string,
		age: number,
		sin: string,
		specialty: ProgrammingSpecialty
	) {
		super(name, age, sin);
		this._specialty = specialty;
	}
}

export { Person };
