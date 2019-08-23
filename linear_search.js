function linearSearch(list, item) {
  let index = -1;
  for (const num of list) {
    index = index + 1;
    if (num === item) {
      return index;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([1, 15, 6, 25, 8, 8], 8));
