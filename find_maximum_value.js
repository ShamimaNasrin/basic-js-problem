// Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

// Solution

const findMaxValue = (arr) => {
  return Math.max(...arr);
};

const numbers = [10, 25, 3, 42, 15, 7];

const maxValue = findMaxValue(numbers);

console.log("Max Value:", maxValue);
