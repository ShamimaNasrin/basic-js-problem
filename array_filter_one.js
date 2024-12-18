// Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// Solution
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
];

const getMaleNames = (arr) => {
  return arr
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
};

const maleNames = getMaleNames(people);

console.log("Male Names:", maleNames);
