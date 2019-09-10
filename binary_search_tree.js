class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

console.log(JSON.stringify(bst));
