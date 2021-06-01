// The fetch method allows to track download progress.
// https://javascript.info/fetch-progress

// To track download progress, we can use response.body property. It’s ReadableStream – a special object that provides body chunk-by-chunk, as it comes. Readable streams are described in the Streams API specification.

// Unlike response.text(), response.json() and other methods, response.body gives full control over the reading process, and we can count how much is consumed at any moment.

// instead of response.json() and other methods
const reader = response.body.getReader();

// infinite loop while the body is downloading
while (true) {
	// done is true for the last chunk
	// value is Uint8Array of the chunk bytes
	const { done, value } = await reader.read();

	if (done) {
		break;
	}

	console.log(`Received ${value.length} bytes`);
}

// We receive response chunks in the loop, until the loading finishes, that is: until done becomes true.

// To log the progress, we just need for every received fragment value to add its length to the counter.
