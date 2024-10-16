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
console.log(account.getBalance())