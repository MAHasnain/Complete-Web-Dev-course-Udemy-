// let i = 0;
// let sum1 = 0;
// let sum2 = 0;

// while (i <= 5) {
//   // 1+2+3+4+5
//   sum1 += i;
//   sum2 += i;
//   i++;
// }

// console.log(sum1);
// console.log(sum2);
// console.log(i);

// let j = 0;
// let table = 0;
// while (i <= 10) {
//   table += `1 * ${i} = ${i * j}`;
//   i++;
// }

// console.log(table);

// Table printing

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// let i = 0;
// let j;
// while (i <= 10) {
//   while (j <= 10) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
// i++;
// }

/*
3. Write a do while loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
Store each tea type in an array named 'teaCollection`.
*/



/*
4. Write a `do while loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/



/*
5. Write a `for` loop that multiplies each element in the
array [2, 4, 6] by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let numbers = [2, 4, 6];
let multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i] * 2;
  multipliedNumbers.push(element);
}

console.log(multipliedNumbers);

/*
6. Write a for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  cityList.push(city);
}

console.log(`cityList =`, cityList);
