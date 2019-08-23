function binarySearch(list, num) {
  let start = 0;
  let end = list.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (list[middle] !== num && start <= end) {
    if (num < list[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return num === list[middle] ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
