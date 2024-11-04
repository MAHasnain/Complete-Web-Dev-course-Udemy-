// Prototypal Inheritance in JavaScript
// Task 1: Create Inheritance Using Prototypes

// Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()

function Animal() {}

Animal.prototype.makeSound = function () {
  return "Animals sound.";
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    return "woof"
}

// Task 2: Shape and Rectangle Inheritance

// Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

// Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.

function Shape(color) {
    this.color = color
    this.getColor = function () {
        return color
    }
}

function Rectangle () {} 

Rectangle.prototype = Object.create()