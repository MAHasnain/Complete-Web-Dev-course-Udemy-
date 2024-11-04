// Async-Await and Promise.all
// Task 1: Async-Await with Promise.all

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()



// Task 2: Error Handling in Async/Await with Promise.all

// Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

// Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.



// Task 3: Timeout with Async/Await and Promise.race

// Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".