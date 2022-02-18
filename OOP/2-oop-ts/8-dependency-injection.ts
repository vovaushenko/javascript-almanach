/**
 * @LAYER1 - DB layer -> has two implmentation -> Mongo DB and My SQL
 * @LAYER2 - Service layer aka Business logic -> uses Repository
 * * on the service layer we work with some interface and have no idea if its Mongo or My Sql
 */

interface IUser {
	name: string;
	age: number;
}

interface UserRepository {
	getUsers: () => Array<IUser>;
}

class UserMongoDBRepository implements UserRepository {
	getUsers(): Array<IUser> {
		console.log('connect to db');
		console.log('get all users');
		const allUsers = [{ name: 'vova loves mongo', age: 5 }];
		return allUsers;
	}
}

class PostgresDBRepository implements UserRepository {
	getUsers(): Array<IUser> {
		console.log('connect to db');
		console.log('get all users');
		const allUsers = [{ name: 'postgres user', age: 5 }];
		return allUsers;
	}
}

class UserService {
	// ! WE DON'T SPECIFY CONCRETE IMPLEMENTATION, BUT USE GENERAL INTERFACE
	userRepo: UserRepository;

	constructor(userRepo: UserRepository) {
		this.userRepo = userRepo;
	}

	filterUsersByAge(age: number) {
		return this.userRepo.getUsers().filter((user) => user.age < age);
	}
}

const userService = new UserService(new UserMongoDBRepository());
