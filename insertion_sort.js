function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let currentVal = list[i];
    for (let j = i - 1; j >= 0; j--) {
      if (list[j] > currentVal) {
        list[j + 1] = list[j];
        list[j] = currentVal;
      }
    }
  }
  return list;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
