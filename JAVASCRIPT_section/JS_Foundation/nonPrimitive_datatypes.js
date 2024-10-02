// Non Primitive Data Types
// Object

// let myName = {
//     firstName : "Muhammad Attaul",
//     lastName : "Hasnain"
// }

// console.log(myName.firstName);
// console.log(myName.lastName);

let userName = {
  "first Name": "Muhammad Attaul",
  lastName: "Hasnain",
};

// console.log(userName["first Name"]);
// console.log(userName.lastName);

userName["is Loged In"] = true;
// console.log(userName);

// console.log(typeof userName);

// Date object is a built in object in javascript

const today = new Date();

console.log(today);
console.log(today.getDate());

console.log(typeof today);

// 11 built in objects in JS

// 1. Object: The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax. For example, the following code creates a new object from an object initializer:

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// 2. Function: The Function object is used to create a new function. A function is a block of code that can be invoked repeatedly from different parts of a program. A function can also return values. In JavaScript, functions are first class citizens, meaning they can be passed around like any other value. For example, the following code creates a new function that adds two numbers together:

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));

// 3. Array: An array is a collection of elements of the same type stored in contiguous memory locations. An array is defined by placing all the elements in a square bracket and separating them with commas. For example, the following is an array of strings:

// let colors = ["red", "green", "blue"];

let strangerIsLogedIn = false;
let diffUsers = [
  "MAHasnain",
  "Mohsin",
  userName.lastName,
  userName,
  strangerIsLogedIn,
];

console.log(diffUsers);
diffUsers.strangerIsLogedIn = true;
console.log(diffUsers);


// 4. String: The String object is used to represent and manipulate a sequence of characters. In JavaScript, strings are immutable, meaning that once a string is created, it cannot be changed. Strings are useful for displaying text in a web page, or for storing and manipulating text data. For example, the following code creates a new string from the concatenation of two other strings:

const hello = "Hello, ";
const world = "world!";

const helloWorld = `${hello + world}!`;
// console.log(helloWorld);

// 5. Boolean: The Boolean object is a wrapper for boolean values. It has two
// possible values: true and false. The Boolean object is used to convert
// non-boolean values to a boolean value. For example, the expression `Boolean("")`
// will return `false`, and the expression `Boolean("any string")` will return
// `true`.

// 6. Number: The Number object is used to represent numerical values. It can be used to perform mathematical operations, such as converting strings to numbers, rounding numbers, and performing arithmetic operations.

// 7. Math: The Math object is used to perform mathematical tasks. It contains methods and properties for mathematical constants and functions, such as the value of pi, trigonometric functions, logarithmic functions, and random number generation.

// 8. Date: The Date object is used to work with dates and times in JavaScript. It can be used to get the current date and time, as well as to perform date and time calculations.

// 9. RegExp: Regular expression is a sequence of characters that define a search pattern.

// 10. Error: The Error object is used to represent and provide information about an error that has occurred. It contains a message, a name, and a stack trace. Errors can be thrown, caught, and propagated.

// 11. Symbol: The Symbol object is used to create an unique identifier for objects. It is used to create a unique identifier for object properties. It is also used to create a private field in a class.
