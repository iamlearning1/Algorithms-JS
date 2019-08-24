function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        const temp = list[j];
        list[j] = list[i];
        list[i] = temp;
      }
    }
  }
  return list;
}

console.log(selectionSort([31, 17, 1, 7, 34, 13]));
