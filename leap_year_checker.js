// Leap Year Checker
// Write a function that determines whether a given year is a leap year.

// Solution

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log("Is Leap Year: 2020", isLeapYear(2020));
console.log("Is Leap Year: 2024", isLeapYear(2024));
console.log("Is Leap Year: 1900", isLeapYear(1900));
console.log("Is Leap Year: 2000", isLeapYear(2000));
console.log("Is Leap Year: 2023", isLeapYear(2023));
