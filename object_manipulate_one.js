// Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

// Solution
const books = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
  },
];

const getBookTitles = (arr) => arr.map((book) => book.title);

const bookTitles = getBookTitles(books);

console.log("Book Titles:", bookTitles);
