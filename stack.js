class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = this.first;
    } else {
      const current = this.first;
      node.next = current;
      this.first = node;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return undefined;

    const current = this.first;
    this.first = this.first.next;
    this.size -= 1;

    if (this.size === 0) {
      this.last = null;
    }

    return current.val;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack.push(100);
stack.push(200);
// stack.push(300);

console.log(stack);
