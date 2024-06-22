/*
Take a number n from the user, create an array of numbers from 1 to n.

- use the reduce method to calculate sum of all numbers in the array
- use the reduce method to calculate product of all numbers in the array
*/


// NOTE: Run it in the browser.

let n = prompt("Enter any number: ");

let arr = []
for (i=1; i<=n; i++) {
    arr[i-1] = i;
}

console.log("array : ", arr);

console.log("sum: ", arr.reduce((res, curr) => {
    return res + curr
}));

console.log("factorial: ", arr.reduce((res, curr) => {
    return res * curr
}));