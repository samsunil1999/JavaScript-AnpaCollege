// Async-Await
// async function always returns a promise 

async function hello() {
    console.log("helo");
}

// 'await' puses the execution of its surrounding async function until the promise is settled.
// await can only be used inside any async function
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200)
        }, 5000);
    });
}

async function getWeatherData() {
    await hello()
    await api()
}

// getWeatherData()

// ######################################################
// Async-Await
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 500);
    });
}

// like this we can synchronously wait for each promise to fulfill
async function getAllData() {
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
    console.log("getting data4.....");
    await getData(4);
    console.log("getting data5.....");
    await getData(5);
    console.log("success");
}
// getAllData()
// call the function from console getAllData()

// Here we had to create getAllData() unnecessarily, just because we had to call the await functions inside it
// Instead we could use IIFE

// IIFE: Immediately Invoked Function Expression
// It is a function that is called immediately as soon as it is defined

/*
It is applied to the following like :

1. a function without name
(function () {
    ...
})();

2. arrow function 
(() => {
    ...
})();

3. async function without name
(async () => {
    ...
})();
*/


// Example
(async function () {
    console.log("IIFE: getting data1.....");
    await getData(1);
    console.log("IIFE: getting data2.....");
    await getData(2);
    console.log("IIFE: getting data3.....");
    await getData(3);
    console.log("IIFE: getting data4.....");
    await getData(4);
    console.log("IIFE: getting data5.....");
    await getData(5);
    console.log("IIFE: success");
})();

