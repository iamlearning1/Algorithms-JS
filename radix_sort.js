const getDigit = (num, digit) =>
  parseInt(
    Math.abs(num)
      .toString()
      .split("")
      .reverse()[digit]
  ) || 0;

const digitCount = num => Math.abs(num).toString().length;

const mostDigits = list => Math.max(...list.map(item => digitCount(item)));

function quickSort(list) {
  const maxDigitCount = mostDigits(list);
  for (let i = 0; i < maxDigitCount; i++) {
    const bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < list.length; j++) {
      const digit = getDigit(list[j], i);
      bucket[digit].push(list[j]);
    }
    list = [].concat(...bucket);
  }
  return list;
}

console.log(quickSort([1, 12, 123, 53, 6432, 432]));
