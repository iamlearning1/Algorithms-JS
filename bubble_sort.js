function bubbleSort(list) {
  let no_swaps;
  for (let i = list.length; i > 0; i--) {
    no_swaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        no_swaps = false;
      }
    }
    if (no_swaps) break;
  }
  return list;
}

console.log(bubbleSort([12, 23, 3, 56, 78, 23]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 8, 7]));
