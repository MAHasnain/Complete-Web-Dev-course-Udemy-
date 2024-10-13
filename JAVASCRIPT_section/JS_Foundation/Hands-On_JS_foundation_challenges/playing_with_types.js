// Playing with Types
// Task 1:

// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(strInp) {
  let covertedNum = Number(strInp)
    
    if (isNaN(covertedNum)) {
        return "Not a number";
    } else {
        return covertedNum
    }

}
let resultOfFirst = stringToNumber("123");
// console.log(resultOfFirst);
// console.log(typeof resultOfFirst);

// Task 2:

// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(boolInp) {
  return !boolInp;
}
let resultOfSecond = flipBoolean(true);
// console.log(resultOfSecond);

// Task 3:

// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(inp) {
  if (!isNaN(Number(inp))) {
    return `I'm a number!`;
  } else if (typeof inp === `string`) {
    return `I'm a string!`;
  }
}
// let resultOfthird = whatAmI(123564897);
let resultOfThird = whatAmI(`MAHasnain`);
// console.log(resultOfThird);

// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(boolInp) {
  if (boolInp) {
    return `${boolInp} = It's truthy`;
  } else {
    return `${boolInp} = It's falsy`;
  }
}


let resultOfFourth = isItTruthy(1);
console.log(resultOfFourth);

console.log(isItTruthy("true"));
console.log(isItTruthy(""));
console.log(isItTruthy(0));

