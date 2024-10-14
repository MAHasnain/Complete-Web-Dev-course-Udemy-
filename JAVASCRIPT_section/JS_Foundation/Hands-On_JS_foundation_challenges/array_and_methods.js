// Arrays and Methods
// Utilize the inbuilt methods of arrays in Javascript to solve the below tasks:

// Task 1: Array Filtering

// Write a function filterNumbers(arr) that returns only numbers from a mixed array

let arr = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 0];

function filterNumbers() {
  return arr.filter(function (a) {
    return a;
  });
}
let Filtering = filterNumbers();
// console.log(`Filtering = ${Filtering}`);

// Task 2: Array Reversal

// Write a function reverseArray(arr) that reverses the array

function reverseArray() {
  return arr.reverse();
}
let Reversal = reverseArray();
// console.log(`Reversal = ${Reversal}`);

// Task 3: Find Maximum in an Array

// Write a function findMax(arr) that returns the largest number in the array

function findMax() {
  return Math.max(...arr);
}
let finding = findMax();
console.log(`finding = ${finding}`);

// Task 4: Remove Duplicates from an Array

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates() {
  return [...new Set(arr)];
}
let removeDup = removeDuplicates();
console.log(`removeDup = ${removeDup}`);

// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray() {
  // console.log(`arr.flat => ${arr.flat(Infinity)}`)

  return arr.flat(Infinity);
}
let flattened = flattenArray();
console.log(`flattened = ${flattened}`);
