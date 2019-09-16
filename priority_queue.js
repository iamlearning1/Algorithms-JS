class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.data = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.data.push(node);

    let currentItemIndex = this.data.length - 1;
    const element = this.data[currentItemIndex];

    while (currentItemIndex > 0) {
      let parentIndex = Math.floor((currentItemIndex - 1) / 2);
      let parent = this.data[parentIndex];

      if (element.priority >= parent.priority) break;

      this.data[parentIndex] = element;
      this.data[currentItemIndex] = parent;
      currentItemIndex = parentIndex;
    }

    return this;
  }

  dequeue() {
    const min = this.data[0];
    const end = this.data.pop();

    if (this.data.length > 0) {
      this.data[0] = end;
      let index = 0;
      const length = this.data.length;
      const element = this.data[0];

      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let leftChild;
        let rightChild;
        let swap = null;

        if (leftChildIndex < length) {
          leftChild = this.data[leftChildIndex];
          if (leftChild.priority < element.priority) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.data[rightChildIndex];
          if (
            (!swap && rightChild.priority < element.priority) ||
            (swap && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIndex;
          }
        }

        if (!swap) break;

        this.data[index] = this.data[swap];
        this.data[swap] = element;
        index = swap;
      }
    }

    return min;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("common cold", 5);
priorityQueue.enqueue("gunshot wound", 1);
priorityQueue.enqueue("high fever", 4);
priorityQueue.enqueue("broken arm", 2);
priorityQueue.enqueue("glass in foot", 3);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
