let playerSelection = "";
let computerSelection ="";

game();

function playerChoice() {
    let goodEntry = false;
    do {
        player = prompt("Please choose between rock, paper or scissors.");
        if (player.toLowerCase() == "rock" || player.toLowerCase() == "paper" || player.toLowerCase() == "scissors"){
            goodEntry = true;
        }
        else {
            console.log("That is not one of the options. Try again");
        }
        
    } while (goodEntry == false);

    return player;
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