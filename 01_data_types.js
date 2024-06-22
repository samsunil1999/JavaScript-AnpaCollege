// ways to declate data types

/*
var name = "Sam Sunil" // can be updated but can be redeclared
let age = 24;          // can be updated but cannot be redeclared in same block scope
const PI = 3.14;       // cannot be updated and cannot be redeclared in same block scope

console.log(age)
console.log(PI)

{
    const PI = 12;
    console.log(PI)
}
*/




// ----------------------------------------------------------------------------------------------------------
// There are 2 types of data type:      1) Primitive data types       2) Non-primitive data types

// Primitive data types:    
// these are data types which already set by the language. 
// Ex: Number, BinInt, String, Boolean, Undefined, Null, Symbol


let Name = "Tony Stark"
console.log(typeof Name)

let x = BigInt(95)
console.log(x)
console.log(typeof x)
console.log(x)

let y = Symbol("heyy!!")
console.log(y)
console.log(typeof y)

// Non primitive data types: objects

const student = {
    fullName : "Sam Sunil",
    age : 24,
    cgpa : 7.1,
    isPass : true
}
console.log(student)
console.log(typeof student)

