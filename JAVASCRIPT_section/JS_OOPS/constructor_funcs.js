function Computer(name, processor, generation, ram, rom) {
  (this.name = name),
    (this.processor = processor),
    (this.generation = generation),
    (this.ram = ram),
    (this.rom = rom);
}

// Instances (copies)
const myComputer = new Computer(`HP`, `Intel`, `3rd`, 12, 428);
// console.log(myComputer);

const Computer2 = new Computer("lenovo", "AMD", "5th", 8, 512);
// console.log(Computer2);

const Computer3 = new Computer("Dell", "Intel", "4th", 4, 216);
// console.log(Computer3)





function User(name, email, isLoggedIn) {
    // function Name(firstName, lastName) {
    //     this.firstName = firstName,
    //     this.lastName = lastName
    // }
    this.name = name,
    this.email = email,
    this.isLoggedIn = isLoggedIn;
}

const User1 = new User("MAHasnain", "mahasnain@gmail.com", true);
console.log(User1)

const User2 = new User("Ali", "Ali@gmail.com", true);
console.log(User2)
console.log(`User2 email : ${User2.email}`)

