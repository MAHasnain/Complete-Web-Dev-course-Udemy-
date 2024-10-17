// Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance(){
    return `$ ${this.#balance}`
  }

}

const account = new BankAccount();
// account.deposit(2e3)
// console.log(account.getBalance())


// Abstraction 

class CoffeeMachine {
  
  start() {

    // DB calls
    return `starting machine ...`
  }

  brewCoffee (){
    return `Brewing Coffee`
  }

  pressStartButton(){
    // return `${this.start()} and ${this.brewCoffee()}`
    
    let msgOne = this.start()
    let msgTwo = this.brewCoffee()

    return `${msgOne} and ${msgTwo}`
  }
}

const oldMachine = new CoffeeMachine();
// console.log(oldMachine.pressStartButton())



// Polymorphism

class Bird {
  fly(){
    return `flying ...`
  }

}

class Penguin extends Bird {

  fly() {
    return `Penguins can't fly`
  }
}

const sparrow = new Bird();
console.log(`sparrow ${sparrow.fly()}`)

const penguin = new Penguin();




