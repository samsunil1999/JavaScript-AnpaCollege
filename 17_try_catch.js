// Error Handling using try-catch


let a = 2;
let b = 4;

console.log("a = ", a);
console.log("b = ", b);
console.log("sum = ", a + b);
console.log("sum = ", a + b);
console.log("sum = ", a + b);
console.log("sum = ", a + b);
// we believe that there could be an error in the next line
// therfore we will handle it using try-catch.
try {
    console.log("sum = ", a + c);
} catch (err) {
    console.log(err);
}

// if we did not handle the error then JS will stop executing from this line
console.log("sum = ", a + b);
console.log("sum = ", a + b);
console.log("sum = ", a + b);
console.log("sum = ", a + b);
