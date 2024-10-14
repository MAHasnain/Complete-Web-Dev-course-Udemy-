// Loops
// Task 1: Sum of First N Natural Numbers

// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
  return (n * (n + 1)) / 2;
}
let sum = sumOfN(5);
console.log(sum);

// Task 2: Multiplication Table

// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

function printMultiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }
  return table;
}

let result = printMultiplicationTable(2);
console.log(result);

// Task 3: Count Vowels in a String

// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

// let str = `MAHasnain`;
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  return `length of vowels ${
    str.split("").filter((char) => vowels.includes(char)).length
  }`;
}

let vowels = countVowels(`HUSAIN`);
console.log(vowels);
