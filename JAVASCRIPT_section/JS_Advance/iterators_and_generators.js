function* numGenerator() {
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
}

let gen = numGenerator();
// let genTwo = numGenerator();

console.log(`gen = ${gen.next().value}`);
console.log(`gen = ${gen.next().value}`);
console.log(`gen = ${gen.next().value}`);
console.log(`gen = ${gen.next().value}`);
console.log(`gen = ${gen.next().value}`);

// console.log(`genTwo = ${genTwo.next().value}`)
// console.log(`genTwo = ${genTwo.next().value}`)
// console.log(`genTwo = ${genTwo.next().value}`)
