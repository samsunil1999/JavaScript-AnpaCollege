/*
For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.
*/


let marksArr = [85, 97, 44, 37, 76, 60];
let sum = 0;

// for (i=0;i<marksArr.length;i++) {
//     sum += marksArr[i];
// }

for (let val of marksArr) {
    sum += val;
}

console.log(`Average of class : ${sum/marksArr.length}`)