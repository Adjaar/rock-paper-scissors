let playerSelection = "";
let computerSelection ="";
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const text = document.createElement('div');
const container = document.querySelector('.content');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#compScore');

text.classList.add('output');

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
})
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
})
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    game();
})

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
        if (human == "rock") {
            switch (comp) {
                case "paper":
                    text.textContent = `You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`
                    console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                    result = 1;
                    break;
                case "scissors":
                    text.textContent = `You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`
                    console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                    result = 2;
                    break;
            }
        }
        else if (human == "paper") {
            switch (comp) {
                case "scissors":
                    text.textContent = `You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`
                    console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                    result = 1;
                    break;
                case "rock":
                    text.textContent = `You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`
                    console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                    result = 2;
                    break;
            }
        }
        else if (human == "scissors") {
            switch (comp) {
                case "rock":
                    text.textContent = `You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`
                    console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                    result = 1;
                    break;
                case "paper":
                    text.textContent = `You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`
                    console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                    result = 2;
                    break;
            }
        }
    }
    else {
        text.textContent = "Same choice! Try again!";
        console.log("Same choice! Try again!");
    }
    playerSelection = "";
    return result;
}

function game(){
    let roundResult;
        roundResult = round(playerSelection, getComputerChoice());
        if (roundResult == 1){
            computerScore += 1;
            cScore.textContent = computerScore;
        } 
        else if (roundResult == 2){
            playerScore += 1;
            pScore.textContent = playerScore;
        }
        container.appendChild(text);
        if (playerScore == 5 || computerScore == 5){
            text.textContent = (playerScore > computerScore) ? "You win! Congratulations!" : "Computer wins, better luck next time!";

            console.log(winner);
        }
}