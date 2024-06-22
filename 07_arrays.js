// Arrays are mutable
// But strings are not mutable

let marks = [92, 84, 56, 36, 99];

for (i=0; i< marks.length; i++) {
    console.log(marks[i]);
}

console.log(`before : ${marks}`);
marks[0] = 100; // this will be updated as the array is mutable
console.log(`after : ${marks}`);

let cities = ["mumbai", "delhi", "Cochin", "Bengaluru", "Pune", "Chennai", "Port Blair"];
for (let city of cities) {
    console.log(city.toUpperCase())
}

// ###################### Array Methods ######################
console.log("array methods")
let foodItems = ["potato", "apple", "tomato", "banana", "ice cream"];
console.log(foodItems)

foodItems.push("burger")
console.log("push burger :", foodItems)

let deletedVal = foodItems.pop()
console.log("pop :", foodItems)
console.log("deleted val from array :", deletedVal)

foodItems.push("chips", "chocolate", "milk")
console.log("push chips, chocolate, milk :", foodItems)

/* Some other array methods are...
toString() --> converts the complete array into a single string which is comma separated
concat() --> same as string it will combine the arrays & returns new array
unshift() --> add elements to the begining & returns new array
shift() --> delete an element from the begining
slice() --> same as string it returns the subset of the array & returns new array
splice() --> it is used to delete or add new elements in the array
*/

marks = [100,99,98,97,96]
console.log(marks)

marks.splice(1,1,101,102) // it deletes 1 element from index 1 and adds two elements 101 & 102 at position 1
console.log(marks)