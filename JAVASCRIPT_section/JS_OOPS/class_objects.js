let userDets = {
  name: "MAHasnain",
  email: "mahasnain@gmail.com",
  isLoggedIn: function () {
    return `${this.name} is log in by this email ${this.email}`;
  },
};

// console.log(userDets.isLoggedIn())





class Vehicle {                /// class
  constructor(make, model) {
    this.make = make,           /// data (properties)
    this.model = model
  }



  start() {                     /// method (function)
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {       /// Inheritance
  drive() {
    return `${this.make} This is an Inheritance example`;
  }
}

// const car1 = new Car("Toyota", "Corolla");
// const car2 = new Car("Honda", "Civic");
// console.log(car1.start());
// console.log(car2.start());
// console.log(car1.drive());



class User {
    constructor(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    }

    signUp(){
        return `${this.username}, ${this.email}, ${this.password}`
    }
}

class User1 extends User {
    login() {
        return `${this.username}, ${this.email}, ${this.password}`
    }
}

const userOne = new User1("MAHasnain", "mah@gmail.com", "mah12345*");

console.log(userOne)
console.log(userOne.login());
console.log(userOne.signUp())
