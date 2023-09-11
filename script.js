let playerSelection = "";
let computerSelection ="";
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


game();

function playerChoice() {
    rock.addEventListener('click', () => {
        alert("Rock");
    })
    paper.addEventListener('click', () => {
        alert("Paper");
    })
    scissors.addEventListener('click', () => {
        alert("Scissors");
    })
}

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch (computer) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function round(human, comp){
    let result = 0;
    if (human != comp){
        if (human.toLowerCase() == "rock") {
            switch (comp) {
                case "paper":
                    console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                    result = 1;
                    break;
                case "scissors":
                    console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                    result = 2;
                    break;
            }
        }
        else if (human.toLowerCase() == "paper") {
            switch (comp) {
                case "scissors":
                    console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                    result = 1;
                    break;
                case "rock":
                    console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                    result = 2;
                    break;
            }
        }
        else if (human.toLowerCase() == "scissors") {
            switch (comp) {
                case "rock":
                    console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                    result = 1;
                    break;
                case "paper":
                    console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                    result = 2;
                    break;
            }
        }
    }
    else {
        console.log("Same choice! Try again!");
    }
    return result;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    while (playerScore < 5 && computerScore < 5){
        playerSelection = playerChoice();
        computerSelection = getComputerChoice();
        roundResult = round(playerSelection, computerSelection);
        if (roundResult == 1){
            computerScore += 1;
        } 
        else if (roundResult == 2){
            playerScore += 1;
        }
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
    }
    let winner = (playerScore > computerScore) ? "You win! Congratulations" : "Computer wins, better luck next time!";
    console.log(winner);
}