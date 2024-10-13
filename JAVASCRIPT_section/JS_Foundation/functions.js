function greet(name) {
  console.log(`Hello ${name}`);
  return `Hello ${name}`;
}
// greet("M A Hasnain");
let greeting = greet(`MAHasnain`);
// console.log(greeting);

function sum(num1, num2) {
  return num1 + num2;
}
// let result = sum(4, 3);
// let result = sum(4, 7);

// console.log(result);

function multiply(num1, num2) {
  return num1 * num2;
}
// let result = multiply(4, 3);
// let result = sum(4, 7);

// console.log(result);

/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with "green tea"` Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
// let teaOrder = makeTea(`green tea`);
// let teaOrder = makeTea(`Lemon tea`);

// console.log(teaOrder);
/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like "Order confirmed for chai"`.
Call `confirmOrder from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

/*
3. Write an arrow function named 'calculate Total` that takes two parameters: `price` and `quantity`. The
function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named 'totalCost`.
*/

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(20, 10);
console.log(`totalCost = ${totalCost}`);
