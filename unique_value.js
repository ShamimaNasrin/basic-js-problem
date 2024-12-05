// Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// Solution
const numbers = [10, 15, 20, 10, 30, 20, 40, 30];

const getUniqueNumbers = (arr) => {
  return [...new Set(arr)];
};

const uniqueNumbers = getUniqueNumbers(numbers);

console.log("Unique Numbers:", uniqueNumbers);
