// Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

const account = new BankAccount();
// account.deposit(2e3)
// console.log(account.getBalance())

// Abstraction

class CoffeeMachine {
  start() {
    // DB calls
    return `starting machine ...`;
  }

  brewCoffee() {
    return `Brewing Coffee`;
  }

  pressStartButton() {
    // return `${this.start()} and ${this.brewCoffee()}`

    let msgOne = this.start();
    let msgTwo = this.brewCoffee();

    return `${msgOne} and ${msgTwo}`;
  }
}

const oldMachine = new CoffeeMachine();
// console.log(oldMachine.pressStartButton())

// Polymorphism

class Bird {
  fly() {
    return `flying ...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

const sparrow = new Bird();
// console.log(`sparrow ${sparrow.fly()}`)

const penguin = new Penguin();

// getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error(`Salary cannot be in negative.`);
    }

    (this.name = name), (this._salary = salary);
  }

  get salary() {
    return `You are not allowed to see the salary.`;
  }

  set salary(value) {
    // Setter must have exactly one formal parameter.
    if (value < 0) {
      console.error(`Invalid amount to add in salary.`);
    } else {
      this._salary = value;
    }
  }
}

const emp = new Employee("Alice", 50000);
// console.log(emp.salary)
console.log(emp);

emp.salary = 600600;
// emp._salary += 600600;

console.log(emp);

// console.log(emp._salary)  ///  error
