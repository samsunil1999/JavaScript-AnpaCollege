// CALLBACKS.....
// A callback is a function which is passed as an argument to another function.

function sum(a, b) {
    console.log("sum : ", a+b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a,b)
}

calculator(2, 5, sum)
