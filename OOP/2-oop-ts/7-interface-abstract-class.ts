interface Reader {
	read: (url: string) => void;
}

interface Writer {
	write: (url: string) => void;
}

class FileClient implements Reader, Writer {
	read(url: string) {
		console.log(url);
	}

	write(url: string) {
		console.log(url);
	}
}
