// Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// Solution
const numbers = [10, 15, 20, 25, 30, 35, 40];

const sumEvenNumbers = (arr) => {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
};

const result = sumEvenNumbers(numbers);

console.log("Sum of Even Numbers:", result);
