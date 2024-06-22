// these loops are generaly used for object types the the variable will have the keys of the object
// these are also used for arrays


// for in loop
let student = {
    name: "Sam Sunil",
    age: 24,
    cgpa: 7.5,
    isPass: true
}

for (let key in student) {
    // console.log(key)
    console.log("key=",key,"value=",student[key])
}