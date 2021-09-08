//* We can add to TOP (PUSH)
//* We can remover from TOP (POP)
//! LIFO

//* Stack is useful for backtracking algorithms, browser history, history of steps...

/**
 *
 ** ARRAY STACK
 */

const myStack = [];
myStack.push('a');
myStack.push('b');
console.log(myStack);
myStack.pop();

/**
 *
 ** LINKED LIST STACK
 */

class StackNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new StackNode(val);
		if (this.length === 0) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}

		this.length++;
	}

	pop() {
		if (this.length === 0) return null;
		const poppedNode = this.top;
		this.top = this.top.next;
		this.size--;
		return poppedNode.val;
	}

	printStack() {
		const values = [];
		let currentNode = this.top;
		while (currentNode) {
			values.push(currentNode.val);
			currentNode = currentNode.next;
		}
		return values;
	}

	getTop() {
		return this.top.val;
	}
}

let stack = new Stack();
console.log(stack);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(5);
console.log(stack.printStack());

console.log(stack.getTop());
console.log(stack.pop());
console.log(stack.printStack());
