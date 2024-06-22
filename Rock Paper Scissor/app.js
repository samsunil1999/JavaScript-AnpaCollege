let uScore = 0;
let cScore = 0;

let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")
let msg = document.querySelector("#msg")
let resetBtn = document.querySelector("#reset-btn")
const choices = document.querySelectorAll(".choice")
const optRock = "rock"
const optPaper = "paper"
const optScissors = "scissors"

const generateCompChoice = () => {
    const options = [optRock, optPaper, optScissors];
    const randIdx = Math.floor(Math.random() * 3)
    console.log("computer choice: ", options[randIdx]);
    return options[randIdx]
}

const showWinner = (usrChoice, computerChoice) => {
    // find the winner
    if (usrChoice === computerChoice) {
        msg.innerText = "It was a draw"
        msg.style.backgroundColor = "#091234"
        console.log("DRAW");
    } else if (
        (usrChoice === optRock && computerChoice === optScissors) ||
        (usrChoice === optPaper && computerChoice === optRock) ||
        (usrChoice === optScissors && computerChoice === optPaper)
    ) {
        uScore++;
        userScore.innerText = uScore;
        msg.innerText = `You won! ${usrChoice} beats ${computerChoice}`
        msg.style.backgroundColor = "green"
        console.log("USER WON");

    } else {
        cScore++;
        compScore.innerText = cScore;
        msg.innerText = `You lost. ${computerChoice} beats ${usrChoice}`
        msg.style.backgroundColor = "red"
        console.log("COMPUTER WON");
    }
}

const playGame = (usrChoice) => {
    console.log("user choice: ", usrChoice);
    // Generate computer choice
    let computerChoice = generateCompChoice()

    showWinner(usrChoice, computerChoice)
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});


resetBtn.addEventListener("click", () => {
    console.log("reset clicked");
    uScore = 0;
    cScore = 0;
    userScore.innerText = uScore;
    compScore.innerText = cScore;
    msg.innerText = "Play your move!"
    msg.style.backgroundColor = "#091234"
});