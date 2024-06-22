/*
We are given an array of marks of students. Filter out marks of student who scored 90+.
*/

let marks = [84, 91, 100, 90, 78, 99, 56];
console.log("all scores: ", marks);

let final = marks.filter((val) => {
    return val > 90
});

console.log("scores above 90: ", final);

