const person = {
  name: "MAHasnain",

  greet() {
    console.log(`Hello I'm ${this.name}`);
  },
};

// let greetFn = person.greet
// console.log(greetFn)

let greetFn = person.greet.bind({name: "MAH" })

greetFn()
