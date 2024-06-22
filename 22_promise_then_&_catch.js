// PROMISE HANDLING
// we can't do anything if the promise is in 'pending' state
/*
can be handled in two ways
1. promise in 'fulfilled' state;
    promise.then((res) => {.....})
2. promise in 'rejected' state
    promise.catch((err) => {.....}) 
*/

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        setInterval(() => {
            if (Math.floor(Math.random() * 2)) { // used Math.random() to randomly resolve or reject the promise
                resolve("success response");
            }else {
                reject("network error")
            }
        }, 2000);
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled: ", res);
});
promise.catch((err) => {
    console.log("promise rejected:", err);
})