const data = []
for (let i = 0; i < 100000000; i++) {
  data.push(i)
}

function peakFindingSimple(arr) {
  let peak = 0
  for (let i of arr) {
    if (i > peak) {
      peak = i
    }
  }
  return peak;
}

console.time('peakFindingSimple')
console.log(peakFindingSimple(data), 'simple')
console.timeEnd('peakFindingSimple')

function peakFindingRecursive(arr) {
  let middle = parseInt(arr.length / 2)
  if (arr[middle] < arr[middle - 1]) {
    return peakFindingRecursive(arr.slice(0, middle - 1))
  } else if (arr[middle] < arr[middle + 1]) {
    return peakFindingRecursive(arr.slice(middle + 1, arr.length))
  } else {
    return arr[middle];
  }
}

console.time('peakFindingRecursive')
console.log(peakFindingRecursive(data), 'recursive')
console.timeEnd('peakFindingRecursive')
