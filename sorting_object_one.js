// Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

// Solution
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2012 },
  { make: "Chevrolet", model: "Camaro", year: 2020 },
  { make: "Tesla", model: "Model 3", year: 2019 },
];

const sortCarsByYear = (carArray) => {
  return carArray.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);

console.log(sortedCars);
