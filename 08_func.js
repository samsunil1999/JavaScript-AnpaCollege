function myFunction() {
    console.log("Welcome to Apna College!");
    console.log("We are learning JS :)");
}

function customMsgFunction(msg) {
    console.log(msg)
}

myFunction();
customMsgFunction("Hello world!!")


// Arrow functions 
// Its just a compact way to write the function
// It is generally used for going small things 
/*
Example:
let variableName = (param1, param2,...) => {

    //body of the function

}
*/

let arrowFuncSum = (a,b) => {
    console.log(`Arrow Sum : ${a+b}`);
};

arrowFuncSum(2,5)

// Arrow function can also be written in a single line

let arrowFuncMul = (a,b) => console.log(`Arrow Mul : ${a*b}`);

arrowFuncMul(10,6)



