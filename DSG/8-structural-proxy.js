/**
 * @PROXY
 *
 * * Proxies can be virtual(lazy-load), loggin proxy, protecting proxy, caching proxy
 *
 * Proxy intercepts calls to an original object and allows to manipulate them.
 * */

class CarAccess {
	open() {
		console.log('Opening cars doors');
	}

	close() {
		console.log('Closing cars door');
	}
}

//  proxy wraps any door with additional security features

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			console.log('Access denied!');
		}
	}

	authenticate(password) {
		return password === 'FOO';
	}

	close() {
		this.door.close();
	}
}

const protectedCarDoor = new SecuritySystem(new CarAccess());

protectedCarDoor.open('Jack');
protectedCarDoor.open('SAM');
protectedCarDoor.open('FOO');
protectedCarDoor.close();
