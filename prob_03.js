/*
Create a game where you start with any random game number. Ask the user to kepp
guessing the game number until the user enters correct value.

lets take the gameNumber = 25
*/

let gameNumber = 25;
let input = prompt("guess the game number");

while (gameNumber != input) {
    console.log(input,"is an incorrect input, Please try again")
    input = prompt("guess the game number");
}

console.log("You have guessed the correct number.....")