/**
 * @POLYMORPHISM
 *
 * There are two types of polymorphism: polymorph
 *  - Parametric (genuine)
 *  - Ad-hoc
 */

// 1️⃣ Ad hoc example

/**
 
 class Calculator {
   static add(a: number, b: number): number {
     return a + b;
   }
 
   static add(a: string, b: string): string {
     return a + b;
   }
 }
 */

// 2️⃣ Parametric example (genuine)

class Summator {
	public _n: number;
	constructor(number: number) {
		this._n = number;
	}

	getSum(val: number) {
		return this._n + val;
	}
}
class SummatorX3 extends Summator {
	constructor(number: number) {
		super(number);
	}

	getSum(val: number) {
		return this._n + val * 3;
	}
}
class SummatorX5 extends Summator {
	constructor(number: number) {
		super(number);
	}

	getSum(val: number) {
		return this._n + val * 5;
	}
}

const s1 = new Summator(2);
const s2 = new SummatorX3(2);
const s3 = new SummatorX5(2);

[s1, s2, s3].forEach((summator) => console.log(summator.getSum(2)));
