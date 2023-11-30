class PriorityQueue {
	constructor() {
		this.items = [];
	}
	enqueue(item, priority) {
		this.items.push({ item, priority });
		this.items.sort((a, b) => a.priority - b.priority);
	}
	dequeue() {
		return this.items.shift().item;
	}
}

const queue = new PriorityQueue();

queue.enqueue('A', 1); // {item: 'A', priority: 1}
queue.enqueue('B', 2); // {item: 'A', priority: 1} -> {item: 'B', priority: 2}
queue.enqueue('C', 3); // {item: 'A', priority: 1} -> {item: 'B', priority: 2} -> {item: 'C', priority: 3}
queue.enqueue('D', 2); // {item: 'A', priority: 1} -> {item: 'D', priority: 2} -> {item: 'B', priority: 2} -> {item: 'C', priority: 3}

console.log(queue.dequeue()); // A
console.log(queue.dequeue()); // D
console.log(queue.dequeue()); // B
console.log(queue.dequeue()); // C
