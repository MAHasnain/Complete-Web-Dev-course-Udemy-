// Closures in JavaScript
// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.

function createCounter() {
    let counter = 4
    return function() {
        return counter ++
    }
}
let increments = createCounter();
// console.log(increments())
// console.log(increments())
// console.log(increments())

// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter() {
    
}

// Task 3: Memoization Function

// Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.