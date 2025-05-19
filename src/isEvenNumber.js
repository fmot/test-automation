const isEvenNumber = (number) => number % 2 === 0;

const conditionalSum = function (values = [], condition = "") {
  const filtered = values.filter((number) =>
    condition === "even" ? isEvenNumber(number) : !isEvenNumber(number)
  );
  return filtered.reduce((prev,curr) => prev + curr, 0);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0