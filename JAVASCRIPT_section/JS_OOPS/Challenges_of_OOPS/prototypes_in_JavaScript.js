// Prototypes in JavaScript

// Task: Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherits from Animal using prototypes.

// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

function Animal() {}

Animal.prototype.speak = function () {
  return `Animal speaking.`;
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return `woof!`;
};

Dog.prototype.constructor = Dog;
console.log(Dog);


// Functional Constructor and Errors
// Task 1: Create a Functional Constructor

// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".


// // Task 2: Handle Errors

// // Modify the Person constructor to throw an error if the age is not a positive number.

function Person(name, age) {
    if (age % 2 == 0) {
        console.log(age)
    }else{
        throw new Error(`${age} is not a positive number`)
    }

    this.name = name,
    this.age = age
    this.greet = function(){
        return `Hello, my name is ${name}`
    }
}

const greetMethod = new Person("MAH", 60);
console.log(Person.age);
