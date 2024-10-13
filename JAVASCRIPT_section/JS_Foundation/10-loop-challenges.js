/*
 1. Write a `for` loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
 Store all teas before "chai"` in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

/*
2. Write a `for` loop that loops through the array ["London", "New York", "Paris", "Berlin"]` and skips "Paris". Store the other cities in a new array named
`visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

// console.log(smallNumbers);

/*
4. Use a for-of` loop to iterate through the array `for-of`loop
I
["chai", "green tea", "herbal tea", "black tea"]` and skip "herbal tea"`.
Store the other teas in an array named `preferredTeas`.
*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const chai of teaTypes) {
  if (chai === "herbal tea") {
    continue;
  }
  preferredTeas.push(chai);
}
// console.log(preferredTeas);

/*
5. Use a for-in` loop to loop through an object containing city populations.
Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.
let citiesPopulation = { 
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin":3500000
}
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulations = {};

for (const city in citiesPopulation) {
  // console.log(Object.values(citiesPopulation));
  if (city === "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
// console.log(cityNewPopulations);

/*
6. Use̟ a `for-in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000, "Berlin":3500000,
    "Paris": 2200000
};
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  // console.log(city);
  largeCities[city] = worldCities[city];
}
// console.log(largeCities);

/*
8. Write a `forEach loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
Skip "Sydney" and store the other cities in a new array named 'traveledCities`.
*/

let traveledCities = [];
let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
myCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }

  // console.log(city);
  traveledCities.push(city);
});
// console.log(traveledCities);
// console.log(myCities);

/*
9. Write a `for loop that iterates through the array [2, 5, 7, 9]`.
Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let numbers2 = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] === 7) {
    continue;
  }
  console.log(numbers2[i]);
  doubledNumbers.push(numbers2[i] * 2);
}

// console.log(doubledNumbers);

/*
10. Use a `for-of` loop to iterate through the array
["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
and stop when the length of the current tea name is
greater than 10.
Store the teas iterated over in an array named `short Teas`.
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
// console.log(shortTeas);

// 1. Write a function that prints all the numbers from 1 to 100 using a `for` loop.

function printNums(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
// printNums(20);

// 2. Create a function that takes an array as input and uses a `for` loop to return the sum of all the elements in the array.

function sumOfElem(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}
// sumOfElem([1, 2, 3, 4, 5]);

// 3. Write a program that uses a `while` loop to print the first 10 even numbers.

let number = 0;
while (number % 2) {
  console.log(number);
  number++;
}
console.log(number);

// 4. Implement a function that uses a `do...while` loop to count down from 10 to 1 and prints each number.

// let num = 0;
// do {
//   num--;
//   console.log(num);
// } while (10);

// 5. Write a function that uses a `for` loop to calculate and return the factorial of a given number.

// 6. Create a program that uses nested loops to print a multiplication table for numbers from 1 to 10.

// 7. Write a function that uses a `for...of` loop to iterate through an array of strings and log each string to the console.

// 8. Write a program that uses a `for...in` loop to iterate over the properties of an object and logs both the keys and their values.

// 9. Implement a function that uses a `while` loop to reverse a given string.

// 10. Create a program that uses a loop to find the largest number in an array of numbers.
