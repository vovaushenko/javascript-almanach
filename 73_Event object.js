// 🟢Event object🟢

// To properly handle an event we’d want to know more about what’s happened. Not just a “click” or a “keydown”, but what were the pointer coordinates? Which key was pressed? And so on.

// When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.

// Here’s an example of getting pointer coordinates from the event object:

const targetBtn = document.querySelector('.dummy-target');

targetBtn.onclick = (event) => {
  console.log(event);
  alert(event.type + ' at ' + event.currentTarget);
  alert('Coordinates: ' + event.clientX + ':' + event.clientY);
};

// 🟢Object handlers: handleEvent🟢

// We can assign not just a function, but an object as an event handler using addEventListener. When an event occurs, its handleEvent method is called.
let obj = {
  handleEvent(event) {
    alert(event.type + ' at ' + event.currentTarget);
  },
};

targetBtn.addEventListener('click', obj);

// We could also use a class for that:

class Menu {
  handleEvent(event) {
    switch (event.type) {
      case 'mousedown':
        targetBtn.innerHTML = 'Mouse button pressed';
        break;
      case 'mouseup':
        targetBtn.innerHTML += '...and released.';
        break;
    }
  }
}

let menu = new Menu();
targetBtn.addEventListener('mousedown', menu);
targetBtn.addEventListener('mouseup', menu);
