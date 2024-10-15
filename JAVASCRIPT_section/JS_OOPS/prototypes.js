// prototype means extra properties and functionality in any given data type

let person = {
  name: "Hasnain",
  age: 20,
  email: "muhatta427@gmail.com",
};

let person2 = {
  name: "Hitesh",
  age: 19,
  isLoggedIn: false,
};

console.log(person);

// console.log(person2.__proto__);  /// dunder __

Object.setPrototypeOf(person, person2);
console.log(person.isLoggedIn);
// console.log(person.email);

Array.prototype.myDets = function () {
  return this;
};

let myName = ["Muhammad Atta ul Hasnain"];
console.log(`My Name is ${myName.myDets()}`);

let myAge = [23]
console.log(`I'm ${myAge.myDets()} years old.`)
