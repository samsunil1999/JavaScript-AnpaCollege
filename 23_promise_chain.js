// this is an async function as setTimeout() is used
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success")
        }, 4000);
    });
}

console.log("fetching data1.....");
let p1 = asyncFunc();
p1.then((result) => {
    console.log(result);
});


// PROMISE CHAIN
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 5000);
    });
}
// Promise chain --> calling the promise inside othen promise.
// this almost same as the callback hell, but much readable than callback hell
console.log("getting data 1......");
getData(1).
    then(() => {
        console.log("getting data 2......");
        return getData(2);
    })
    .then(() => {
        console.log("getting data 3......");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });

// But we have better way to handle this as async-await