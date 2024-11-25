Event Loop
------------------------------------------------------------------------------------------
> JS is Single Threaded - working on a single thread
> service work is the concept of making js multi threaded
> working on top-bottom order - Synchronous
> asynchronous - process with time delay
> Web API - aplication processsing interface which hold the asynchronous function till its delay from call stack and enqued to the queue from where which moved into call stack
> need to refer videos from robert phillips
> Event Loop is actually working b/w the call stack and the queue which always checks both call stack and queue


Call Back
-----------
> A callback is just a function passed to another function to handle the result of an asynchronous operation.
> It's a key part of Node.js's non-blocking design.


Promises
---------
> A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous task.
> It allows you to handle asynchronous operations more cleanly than using callbacks.
> A Promise has three states:
    1. Pending: The task is still in progress.
    2. Fulfilled: The task is complete, and the promise is resolved successfully.
    3. Rejected: The task failed, and the promise is rejected.

>Promise.all() used to handle multiple promises on single rewoke.
    - Which will only resolved when all promises resolved, otherwise it will be rejected

>Promise.allSettled() also used for handling multiple promises on single revoke, but it will resolve any of the promise resolved
    -get the reason of the rejected on rejected promise in the resolved state of promise.allSettled() 

>Promise.any() returns a resolved single promise if we give multiple Promises , get resolved only resolving of a single promise which handled

>Promise.race() returs first promise if we give multiple Promises, get resolved or rejected acording to the first promise


async-await
-----------
>async and await are used to handle asynchronous operations (like fetching data or reading files)
>It's a cleaner and more readable way, compared to callbacks or promises.

>async:
    - Marks a function as asynchronous.
    - This means the function will always return a promise, even if you return a value.

>await:
    - Pauses the execution of the code inside an async function until the promise is resolved.
    - It waits for the asynchronous operation to finish and gives you the result.

>IIFE - Immideately Invoked Function Expression
    (()=>{
    
    })();
    - IIFE cannot be reused outside
>trycatch is basically used to handle reject state while async await used