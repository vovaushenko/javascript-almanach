// https://javascript.info/fetch-crossorigin

// If we send a fetch request to another web-site, it will probably fail.

// For instance, let’s try fetching http://example.com:

(async () => {
	try {
		await fetch('http://example.com');
	} catch (err) {
		alert(err); // Failed to fetch
	}
})();

// Fetch fails, as expected.

// The core concept here is origin – a domain/port/protocol triplet.

// Cross-origin requests – those sent to another domain (even a subdomain) or protocol or port – require special headers from the remote side.

// That policy is called “CORS”: Cross-Origin Resource Sharing.

// 🟢 Why is CORS needed? A brief history 🟢

// CORS exists to protect the internet from evil hackers.

// For many years a script from one site could not access the content of another site.

// That simple, yet powerful rule was a foundation of the internet security. E.g. an evil script from website hacker.com could not access the user’s mailbox at website gmail.com. People felt safe.

// JavaScript also did not have any special methods to perform network requests at that time. It was a toy language to decorate a web page.

// 🟢🟢 But web developers demanded more power. A variety of tricks were invented to work around the limitation and make requests to other websites. 🟢🟢

// 1️⃣ One way to communicate with another server was to submit a <form> there. People submitted it into <iframe>, just to stay on the current page, like this:
/*

  <!-- form target -->
  <iframe name="iframe"></iframe>

  <!-- a form could be dynamically generated and submited by JavaScript -->
  <form target="iframe" method="POST" action="http://another.com/…">
    ...
  </form>

*/

// 2️⃣ Using scripts

// Another trick was to use a script tag. A script could have any src, with any domain, like <script src="http://another.com/…">. It’s possible to execute a script from any website.
