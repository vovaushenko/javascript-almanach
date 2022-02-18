/**
 * Here we can manipulate tables only through a specific create table method
 */

class Database {
	private _url: string;
	private _port: number;
	private _username: string;
	private _password: string;
	private _tables: string[];

	constructor(url: string, port: number, username: string, password: string) {
		this._url = url;
		this._port = port;
		this._username = username;
		this._password = password;
		this._tables = [];
	}

	public createTable(table: string) {
		this._tables.push(table);
	}

	public clearTables() {
		this._tables = [];
	}

	get url() {
		return this._url;
	}
	set url(val: string) {
		this._url = val;
	}

	get port() {
		return this._port;
	}
	set port(val: number) {
		this.port = val;
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
}

const db = new Database('foo', 300, 'bar', 'baz');
