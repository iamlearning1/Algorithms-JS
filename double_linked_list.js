class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    node.prev = null;

    return node;
  }

  shift() {
    if (this.length === 0) return undefined;
    const node = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;

    return node;
  }

  unshift(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let node;
    let counter;

    if (index <= this.length / 2) {
      counter = 0;
      node = this.head;
      while (counter < index) {
        node = node.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;
      while (counter > index) {
        current = node.prev;
        counter--;
      }
    }

    return node;
  }

  set(index, val) {
    const current = this.get(index);
    if (!current) return false;
    current.val = val;
    return true;
  }
}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.push("hello");
doubleLinkedList.push("world");
doubleLinkedList.push("!");
// doubleLinkedList.pop();
// doubleLinkedList.shift();
// doubleLinkedList.unshift("There");
// doubleLinkedList.set(3, "Hi");

console.log(doubleLinkedList);
