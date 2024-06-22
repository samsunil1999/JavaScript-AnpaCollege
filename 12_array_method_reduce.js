// .reduce() --> array method
/*
Performs some operations & reduces the array to a single value. It return 
that single value.
*/


let arr = [1,2,7,3,4,5];
console.log("array: ", arr);
let output = arr.reduce((prev, curr) => {
    return prev + curr
})

console.log("sum :", output);

// find the largest number from the array
let largest = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})

console.log("largest: ",largest)