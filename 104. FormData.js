// This chapter is about sending HTML forms: with or without files, with additional fields and so on.

// FormData objects can help with that. As you might have guessed, it’s the object to represent HTML form data.

// The constructor is:

let formData = new FormData([form]);

// If HTML form element is provided, it automatically captures its fields.

// The special thing about FormData is that network methods, such as fetch, can accept a FormData object as a body. It’s encoded and sent out with Content-Type: multipart/form-data.

// 🟢 1️⃣Sending a simple form 🟢
{
	/* <form id="formElem">
  <input type="text" name="name" value="John">
  <input type="text" name="surname" value="Smith">
  <input type="submit">
</form> */
}

formElem.onsubmit = async (e) => {
	e.preventDefault();

	let response = await fetch('/article/formdata/post/user', {
		method: 'POST',
		body: new FormData(formElem),
	});

	let result = await response.json();

	alert(result.message);
};

// 🟢 2️⃣ FormData Methods 🟢

// We can modify fields in FormData with methods:
// 🟢formData.append(name, value) – add a form field with the given name and value,
// 🟢formData.append(name, blob, fileName) – add a field as if it were <input type="file">, the third argument fileName sets file name (not form field name), as it were a name of the file in user’s filesystem,
// 🟢formData.delete(name) – remove the field with the given name,
// 🟢formData.get(name) – get the value of the field with the given name,
// 🟢formData.has(name) – if there exists a field with the given name, returns true, otherwise false

// Also we can iterate over formData fields using for..of loop:

let formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// List key/value pairs
for (let [name, value] of formData) {
	alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
}

// 🟢 3️⃣ Sending a form with a file 🟢

// The form is always sent as Content-Type: multipart/form-data, this encoding allows to send files. So, <input type="file"> fields are sent also, similar to a usual form submission.

{
	/* <form id="formElem">
  <input type="text" name="firstName" value="John">
  Picture: <input type="file" name="picture" accept="image/*">
  <input type="submit">
</form> */
}

formElem.onsubmit = async (e) => {
	e.preventDefault();

	let response = await fetch('/article/formdata/post/user-avatar', {
		method: 'POST',
		body: new FormData(formElem),
	});

	let result = await response.json();

	alert(result.message);
};

// 🟢 4️⃣ Sending a form with Blob data 🟢

// As we’ve seen in the chapter Fetch, it’s easy to send dynamically generated binary data e.g. an image, as Blob. We can supply it directly as fetch parameter body.

// In practice though, it’s often convenient to send an image not separately, but as a part of the form, with additional fields, such as “name” and other metadata.

// This example submits an image from <canvas>, along with some other fields, as a form, using FormData:

canvasElem.onmousemove = function (e) {
	let ctx = canvasElem.getContext('2d');
	ctx.lineTo(e.clientX, e.clientY);
	ctx.stroke();
};

async function submit() {
	let imageBlob = await new Promise((resolve) =>
		canvasElem.toBlob(resolve, 'image/png')
	);

	let formData = new FormData();
	formData.append('firstName', 'John');
	formData.append('image', imageBlob, 'image.png');

	let response = await fetch('/article/formdata/post/image-form', {
		method: 'POST',
		body: formData,
	});
	let result = await response.json();
	alert(result.message);
}
