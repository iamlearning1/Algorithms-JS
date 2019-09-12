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
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(12);
heap.insert(27);
heap.insert(123);
heap.insert(55);

console.log(heap);
