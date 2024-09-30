/*

 +
 -
 /
 *
 %

 ++
 --
 2 ** 2

 */

// console.log(2 ** 3)
// console.log(`aritimatic Operations`);

let score = 427;

let bonus = 21;

let total = score + bonus;

console.log(total);

let mult = score * bonus;

let dvd = score / bonus;

let rmndr = score % bonus;

let expo = 3 ** 3;

// console.log(`exponential is ${expo}`);
// console.log(`remainder is ${rmndr}`);
// console.log(`multiplication is ${mult}`);
// console.log(`division is ${dvd}`);

// console.log(`before incrementing of score is ${score}`);
// console.log(`after decrementing of bonus is ${bonus}`);

// score++;
// bonus--;

// console.log(`before incrementing of score is ${score}`);
// console.log(`after decrementing of bonus is ${bonus}`);

console.log(`Comparision Operations`);

let num1 = 5;
let num2 = 10;
let num3 = 15;
let num4 = 5;

console.log(
  `num1 == num2 = ${num1 == num2}, num1 == num4 = ${
    num1 == num4
  }, num3 == num4 = ${num3 == num4}`
);

console.log(
  `num1 > num2 = ${num1 >= num2}, num1 <= num4 = ${
    num1 <= num4
  }, num3 <= num4 = ${num3 <= num4}`
);

console.log(`Logical Operations`);
/*

&& and oprerator 
|| or oprerator
! reverse oprerator (flip the true into false)
*/

// console.log(`&& oprerator ${num2 == num4 && num2 == num3}`);
// console.log(`|| oprerator ${num1 == num2 || num1 == num4}`);

// console.log(`! oprerator ${!num1 == num4}`);

// console.log(`assignment Operations`);

num1 += 5;
// console.log(num1);

// num1 = num1 + 5;
// console.log(num1);

num2 -= 5;

// console.log(`num2 ${num2}`);

num2 = num2 - 5;
// console.log(`num2 ${num2}`);

num3 *= 10;
// console.log(num3);

// num4 /= 5;

num4 = num4 / 5;

// console.log(num4);

let oprPrecedence = 2 * (3 + 8) - 2;
console.log(oprPrecedence);