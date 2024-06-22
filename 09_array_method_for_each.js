// .forEach() --> array method
// used to loop for array

/*
example:
arr.forEach(callBackFunction)
*/

// callBackFunction: 
// Here, it is a function to execute for each element in the array
// It is a function passed as an argument to another function.

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function printValue(val) { // there for each value of the arr the printValue function will be executed.
    console.log(val)
});


// Generally an arrow function is used in forEach method
console.log(`square of ${arr} : `)
arr.forEach((val,idx,arr) => {
    console.log("square of",idx,"index element is",val*val,"of array ", arr)
}) 
