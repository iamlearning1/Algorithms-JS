class MaxBinaryHeap {
  constructor() {
    this.data = [];
  }

  insert(value) {
    this.data.push(value);

    let currentItemIndex = this.data.length - 1;

    while (currentItemIndex > 0) {
      let parentIndex = Math.floor((currentItemIndex - 1) / 2);
      let parent = this.data[parentIndex];

      if (value <= parent) break;

      this.data[parentIndex] = value;
      this.data[currentItemIndex] = parent;
      currentItemIndex = parentIndex;
    }

    return this;
  }

  remove() {
    const max = this.data[0];
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
          if (leftChild > element) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.data[rightChildIndex];
          if (
            (!swap && rightChild > element) ||
            (swap && rightChild > leftChild)
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

    return max;
  }
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.remove();

console.log(heap);
