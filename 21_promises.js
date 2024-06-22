// PROMISES
/*
Promises is for "eventual" completion of task. It is an object in JS.

It is a solution of callback hell.
*/

/*
States of Promise:
1. pending
2. fulfilled (with result)
3. rejected (with error)
*/

/*
Results of Promise:
1. Pending: the result it undefined.
2. Resolved: the result is a value(fulfilled)       resolve(result)
3. Rejected: the result in an error object.          reject(error)
*/

// resolve and reject are two functions 
let successPromise = new Promise((resolve, reject) => {
    console.log("I'm a successPromise");
    resolve("promise completed successfully")
})

let failedPromise = new Promise((resolve, reject) => {
    console.log("I'm a failedPromise");
    reject("some error occurred")
})

// Generally Promise is returned when we call an API. Example shown below
// call the same from the browser 
// let finalValue = getData(123);
function getData(dataId, nextGetData) { 
    // this function return a promise which will be fulfilled after 5s, 
    // after 5s the promise status changes from pending to fulfilled & the promise result changes from undefined to "completed successfully"
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log("data", dataId);
            resolve("completed successfuly") // manually resolving the promise, generally it is done automatically when an API is called
            if (nextGetData) {
                nextGetData();
            }
        }, 5000);
    })
}

