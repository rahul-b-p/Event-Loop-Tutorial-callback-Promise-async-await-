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