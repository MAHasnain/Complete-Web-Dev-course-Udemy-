// Closures in JavaScript
// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.

function createCounter() {
  let counter = 4;
  return function () {
    return counter++;
  };
}
let increments = createCounter();
// console.log(increments())
// console.log(increments())
// console.log(increments())

// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter(fn, limit) {
  let lastCallTime = 0;
  return function (...arg) {
    const now = Date.now();

    if (now - lastCallTime < limit) {
        return "Rate limit exceeded."
    } else {
        lastCallTime = now;
        return fn(...arg)
    }
  };
}

function sayHello(name) {
    return `Hello ${name}`
}

const limitedSayHello = rateLimiter(sayHello, 3000);

// console.log(limitedSayHello("alice"))
// console.log(limitedSayHello("Bob"))

// setTimeout(() => console.log(limitedSayHello("Bob")), 3000);

// Explanation:
// The rateLimiter function takes a function fn and a limit in milliseconds as parameters.
// It keeps track of the lastCallTime to know when fn was last called.
// When the returned function is invoked, it checks if the current time minus lastCallTime is less than the limit.
// If it is, it returns "Rate limit exceeded".
// Otherwise, it updates lastCallTime to the current time and calls fn with the given arguments.


// Task 3: Memoization Function

// Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.

