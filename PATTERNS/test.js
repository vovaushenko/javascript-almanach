function addCSSFiles(url) {
	let documentHead = document.getElementsByTagName('head')[0];
	CSS_FILES.forEach(function (fileName) {
		let stylesheet = document.createElement('link');
		stylesheet.setAttribute('href', [url, 'css', fileName].join('/'));
		stylesheet.setAttribute('type', 'text/css');
		stylesheet.setAttribute('rel', 'stylesheet');
		documentHead.appendChild(stylesheet);
	});
}

function addJSFiles(url) {
	JS_FILES.forEach((fileName) => {
		let script = document.createElement('script');
		script.setAttribute('src', [url, 'js', fileName].join('/'));
		script.setAttribute('type', 'text/javascript');
		document.body.appendChild(script);
	});
}
