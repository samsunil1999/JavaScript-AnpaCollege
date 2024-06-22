// these loops are generaly used for iterating over a string or an array

// for-of loop
let str = "Tony Stark";

for (let s of str) {
    console.log(s)
}

console.log("for-of loop has ended...")

let size = 0;
let str2 = "JavaScript";
for (let i of str2) {
    console.log("i=",i);
    size++;
}

console.log("string size = ", size)
console.log("for-of loop has ended...")