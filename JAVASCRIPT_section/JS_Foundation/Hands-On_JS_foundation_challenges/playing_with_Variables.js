/*
Playing with Variables
Task:

Perform the following mathematical operations
on the provided variables a and b

Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder
*/

// **** DO NOT CHANGE the values *****
let a = 18;
let b = 24;

// Addition of two values
function add() {
  return a + b;
}
let addition = add();
console.log(addition);

// Subtract small value from larger one
function subtract() {
  return a - b;
}
let subtraction = subtract();
console.log(subtraction);

function multiply() {
  return a * b;
}
let multiplication = multiply();
console.log(multiplication);

// Divide larger value by small
function divide() {
  return a / b;
}
let division = divide();
console.log(division);

// Increase value of a by 1
function increment() {
  return (a = a + 1);
}

let incrementation = increment();
console.log(incrementation);

// Decrease value of b by 1
function decrement() {
  return (b = b - 1);
}
let decrementation = decrement();
console.log(decrementation);

// Divide larger value by small to find the reminder
function reminder() {
  return b % a;
}
let remindering = reminder();
console.log(remindering);
