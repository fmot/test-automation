const sumLargestNumbers = function (data = []) {
  const [largest, secondLargest] = data.sort((a, b) => b - a);
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126