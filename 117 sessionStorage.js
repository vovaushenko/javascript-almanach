/*
    🌕 sessionStorage =================================================
*/

// The sessionStorage object is used much less often than localStorage.

//  Properties and methods are the same, but it’s much more limited:

// 1️⃣ The sessionStorage exists only within the current browser tab.
// 2️⃣ Another tab with the same page will have a different storage.
// 3️⃣ But it is shared between iframes in the same tab (assuming they come from the same origin).
// 4️⃣ The data survives page refresh, but not closing/opening the tab.

sessionStorage.setItem('test', 1);
lert(sessionStorage.getItem('test')); // after refresh: 1

//🌕 Storage event

// When the data gets updated in localStorage or sessionStorage, storage event triggers, with properties:

// 1️⃣key – the key that was changed (null if .clear() is called).
// 2️⃣oldValue – the old value (null if the key is newly added).
// 3️⃣newValue – the new value (null if the key is removed).
// 4️⃣url – the url of the document where the update happened.
// 5️⃣storageArea – either localStorage or sessionStorage object where the update happened

// The important thing is: the event triggers on all window objects where the storage is accessible, except the one that caused it.

// Let’s elaborate.

// Imagine, you have two windows with the same site in each. So localStorage is shared between them.

// You might want to open this page in two browser windows to test the code below.

// If both windows are listening for window.onstorage, then each one will react on updates that happened in the other one.

// That allows different windows from the same origin to exchange messages.

// Modern browsers also support Broadcast channel API, the special API for same-origin inter-window communication, it’s more full featured, but less supported. There are libraries that polyfill that API, based on localStorage, that make it available everywhere.
