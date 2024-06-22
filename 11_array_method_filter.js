
// .filter() --> array method
/*
The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/


console.log("################ Example 1 ################");
let numbers = [12,45,100,138,99];

let evenNums = numbers.filter((val) => {
    return val%2 === 0
})

console.log("numbers: ", numbers);
console.log("even numbers: ",evenNums);
console.log("odd numbers: ", numbers.filter((val) => {
    return val%2 !== 0
}));


console.log("################ Example 2 ################");
let student = [
    {
        name: "Sam",
        gender: "male"
    },
    {
        name: "Neha",
        gender: "female"
    },
    {
        name: "Aman",
        gender: "male"
    },
    {
        name: "Bahadur",
        gender: "male"
    },
    {
        name: "Keerthana",
        gender: "female"
    },
    {
        name: "Martin",
        gender: "male"
    },
    {
        name: "Sofiya",
        gender: "female"
    },
]


let maleArray = (val) => {
    return val.gender === "male"
}

let femaleArray = (val) => {
    return val.gender === "female"
}

console.log("array :" ,student);
console.log("male array :" ,student.filter(maleArray).map((i)=>i.name)); // filtering array of object will return an object, and to return only one feild we used map of that filtered array
console.log("female array :" ,student.filter(femaleArray).map((i)=>i.name));
