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

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const node = new Node(val);
    const current = this.get(index - 1);
    const next = current.next;

    node.prev = current;
    node.next = next;
    next.prev = node;
    current.next = node;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const current = this.get(index);

    current.prev.next = current.next;
    current.next.prev = current.prev;
    current.next = null;
    current.prev = null;

    this.length--;
    return current;
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
// doubleLinkedList.insert(1, "Hi");
doubleLinkedList.remove(1);

console.log(doubleLinkedList);
