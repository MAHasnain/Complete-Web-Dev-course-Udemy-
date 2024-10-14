// Higher-Order Functions and Arrow Functions
// All the following tasks must be strictly be writtern in arrow functions only.

// Task 1: Using Array Methods

// Write a function squareNumbers(arr) using map() and arrow functions

// let arr = ["a", "b", "c"];
// function squareNumbers() {
//   return arr.map((item) => console.log(item));
// }
// squareNumbers()

let squareNumbers = (arr) => arr.map((item) => console.log(item * item));
// squareNumbers([1, 2, 3, 4, 5, 6]);

// Task 2: Custom Filter Function

// Create a function filterEvenNumbers(arr) using filter() and arrow functions

let filterEvenNumbers = (arr) =>
  arr.filter((item) => {
    return item % 2 === 0;
    // return console.log(item % 2 === 0);
  });
// filterEvenNumbers([3, 6, 8, 53, 9]);
let filtered = filterEvenNumbers([3, 6, 8, 53, 9]);
// console.log(filtered);

// Task 3: Sum of Positive Numbers

// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

let arr = [1, 3, -4, 5, -0, -5, 8];
let sumPositiveNumbers = () => {
  return arr.filter((item) => item > 0).reduce((sum, num) => sum + num, 0);
};

console.log(sumPositiveNumbers());

// Task 4: Transform Array of Objects

// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

function getNames(arr) {
  return arr.map((obj) => obj.isLoggedIn);
}
let result = getNames([
  {
    name: "Muhammad Atta Ul",
    age: 23,
    isLoggedIn: true,
  },
  {
    name: "Hasnain",
    age: 34,
    isLoggedIn: false,
  },
]);

console.log(result);

// Task 5: Find the Longest Word

// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

let fruits = ["orange", "mango", "pineapple", "waterMelon"];
function findLongestWord() {
  return fruits.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}
let found = findLongestWord();
console.log(`${found} found`);
