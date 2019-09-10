class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const current = this.first;
    this.first = this.first.next;
    this.size--;

    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }

    return current.val;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(123);
queue.enqueue(456);
queue.enqueue(789);

console.log(queue);
