const numberOfVowels = function (data) {
  const vowels = ["a", "e", "i", "o", "u"];
  return data
    .split("")
    .reduce((prev, curr) => (vowels.includes(curr) ? prev + 1 : prev), 0);
};