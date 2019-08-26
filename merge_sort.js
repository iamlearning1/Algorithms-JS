function merge(list1, list2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      result.push(list1[i]);
      i++;
    } else {
      result.push(list2[j]);
      j++;
    }
  }
  while (i < list1.length) {
    result.push(list1[i]);
    i++;
  }
  while (j < list2.length) {
    result.push(list2[j]);
    j++;
  }
  return result;
}

function mergeSort(list) {
  if (list.length <= 1) return list;
  let midPoint = Math.floor(list.length / 2);
  let left = mergeSort(list.slice(0, midPoint));
  let right = mergeSort(list.slice(midPoint));
  return merge(left, right);
}

console.log(mergeSort([1, 4, 7, 2, 3, 67, 34, 12, 53, 67, 98, 13, 54]));
