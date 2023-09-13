let playerSelection = "";
let computerSelection ="";
let playerScore = 0;
let computerScore = 0;
let newGames = false;
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
                    text.textContent = `You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`;
                    result = 1;
                    break;
                case "scissors":
                    text.textContent = `You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`;
                    result = 2;
                    break;
            }
        }
        else if (human == "paper") {
            switch (comp) {
                case "scissors":
                    text.textContent = `You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`;                  
                    result = 1;
                    break;
                case "rock":
                    text.textContent = `You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`;
                    result = 2;
                    break;
            }
        }
        else if (human == "scissors") {
            switch (comp) {
                case "rock":
                    text.textContent = `You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`;
                    result = 1;
                    break;
                case "paper":
                    text.textContent = `You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`;
                    result = 2;
                    break;
            }
        }
    }
    else {
        text.textContent = "Same choice! Try again!";
    }
    playerSelection = "";
    return result;
}

function game(){
    let roundResult;
    if (newGames == false){
   
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
            newGames = true;
            newGame();
        }
    }
}

function newGame(){
    const newGameText = document.createElement('div');
    const yes = document.createElement('button');

    yes.classList.add('small');

    newGameText.textContent = "Would you like to play again?";
    yes.textContent = 'Yes'; 

    newGameText.appendChild(yes);
    container.appendChild(newGameText);

    yes.addEventListener('click', () => {
        playerScore = 0;
        pScore.textContent = 0;
        cScore.textContent = 0;
        computerScore = 0;
        newGames = false;
        container.removeChild(newGameText);
    })
}
