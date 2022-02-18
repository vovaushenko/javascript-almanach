/**
 *@IN this case id cannot be changed from outside
 */
class User {
	private _username: string;
	private _password: string;
	private readonly _id: string;

	constructor(username: string, password: string) {
		this._username = username;
		this._password = password;
		this._id = this.randomId();
	}

	get username() {
		return this._username;
	}
	set username(value: string) {
		this._username = value;
	}

	get password() {
		return this._password;
	}
	set password(value: string) {
		this._password = value;
	}

	get id() {
		return this._id;
	}

	private randomId() {
		return Date.now() + Math.random() + 'hello';
	}
}

const user = new User('vova', 'codes');

console.log({ user });
console.log(user.username);
console.log(user.password);
// user.id ='foo' // readonly will error out
