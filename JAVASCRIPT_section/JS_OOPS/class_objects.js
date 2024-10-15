class Vehicle {
  constructor(make, model) {
    (this.make = make), (this.model = model);
  }

  start() {
    return `${this.make} is a`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} This is an Inheritance example`;
  }
}
