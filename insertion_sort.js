function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (list[j] > list[i]) {
        [list[j + 1], list[j]] = [list[j], list[j + 1]];
      }
    }
  }
  return list;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
