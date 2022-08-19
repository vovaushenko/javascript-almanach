type Entity = {
	readonly id: number;
	readonly name: string;
};

type Course = Entity & { subjects: ReadonlyArray<string> };

type Student = Entity & {
	course: Course;
};

const student: Student = {
	id: 1,
	name: 'John Doe',
	course: {
		id: 1,
		name: 'Computer Science',
		subjects: ['cs', 'math', 'algorithms'],
	},
};
