// .map() --> array method
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.map((val) => {
    return val**2
});

console.log("array :", arr);
console.log("sqaure of array :", newArr);
