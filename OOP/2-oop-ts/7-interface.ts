interface Repository {
	create: <T>(entry: T) => void;
	get: () => any;
	delete: () => void;
	update: <T>(entry: T) => T;
}

class User {
	username: string;
	age: number;
}

export type Foo = { bar: string };

class UserRepository implements Repository {
	create<User>(user: User) {}

	get() {
		return { bar: 'hey' };
	}
	delete() {}
	update<User>(user: User) {
		return user;
	}
}

export { UserRepository };
