let num = prompt("Enter a number:");

if (isNaN(num)) {
    console.log("Invalid Input!!!")
}else {
    if (num%5 === 0){
        console.log(num,"is a multiple of", 5)
    }else {
        console.log("Sorry,",num, "is not a multiple of", 5)
    }
}





let score = prompt("Enter student score");
let grade;

if (isNaN(score) || score > 100 || score < 0) {
    console.log("Invalid score");
}else if(score < 50){
    grade = "F";
}else if (score < 60){ 
    grade = "D";
} else if (score < 70) {
    grade = "C";
} else if (score < 80) {
    grade = "B";
} else {
    grade = "A";
}   

if (grade !== undefined) {
    console.log("student's grade :", grade)
}