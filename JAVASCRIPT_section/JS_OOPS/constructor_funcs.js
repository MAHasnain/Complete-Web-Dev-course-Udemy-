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

        // this.Name = function (firstName, lastName) {
        // return this.firstName = firstName,
        // this.lastName = lastName
    // }
    // this.Name.firstName = "Muhammad Atta ul"
    // this.Name.lastName = "Hasnain"

    this.name = name,
    this.email = email,
    this.isLoggedIn = isLoggedIn;
}

const User1 = new User("MAHasnain", "mahasnain@gmail.com", true);
// console.log(User1)

const User2 = new User("Ali", "Ali@gmail.com", true);
// console.log(User2)
// console.log(`User2 email : ${User2.email}`)

const User3 = new User("MAHasnain", "mahasnain427@gmail.com", true);
// console.log(User3.name)


function Tea(type) {
  this.type = type,
  this.describe = function () {
    return `This is a cup of ${this.type}.`
  }
}

const teaType = new Tea(`Lemon Tea`);
// console.log(`This is ${teaType.type} and ${teaType.describe()}`);


function Animal(species) {
  this.species = species
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound.`
}

const cat = new Animal("cat");
// console.log(cat.sound());

const dog = new Animal("Dog");
// console.log(dog.sound())


Animal.prototype.color = function () {
  return `${this.species} has a particular color.`
}

const lion = new Animal("Lion");
// console.log(lion.color())

Animal.prototype.pet = function () {
  return `${this.species} is loyal pet dog. `
}

const bullDog = new Animal("BullDog");
// console.log(bullDog.pet())


function Software (name) {
  this.name = name
  
  if (!new.target) {
    throw new Error(`${this.name} can be given an error.`);
  } 
}

const pixelSoftware = new Software("Photoshop");
// const illustrator = Software("Illustrator"); ///  Error here
const vectorSoftware = new Software("Illustrator");

console.log(`${pixelSoftware.name} is a bigger and detailed pixel based Software.`)
console.log(`${vectorSoftware.name} is a vector based Software.`)
