function pivot(list, start = 0, end = list.length + 1) {
  let pivot = list[start];
  let swapIndex = start;
  for (let i = start + 1; i < list.length; i++) {
    if (pivot > list[i]) {
      swapIndex++;
      let temp = list[i];
      list[i] = list[swapIndex];
      list[swapIndex] = temp;
    }
  }
  list[start] = list[swapIndex];
  list[swapIndex] = pivot;
  return swapIndex;
}

function quickSort(list, left = 0, right = list.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(list, left, right);
    // left
    quickSort(list, left, pivotIndex - 1);
    // right
    quickSort(list, pivotIndex + 1, right);
  }
  return list;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
