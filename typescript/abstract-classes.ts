abstract class StreetFigher {
	constructor() {}
	abstract fight(): void;
	abstract move(): void;
	abstract getSpecialAttack(): string;
}

class Ruy extends StreetFigher {
	fight() {
		console.log('Ruy is fighting');
	}
	move() {
		console.log('Ruy is moving');
	}
	getSpecialAttack() {
		return 'Ruy is super fighting';
	}
}

const ruy = new Ruy();

console.log(ruy.getSpecialAttack());
