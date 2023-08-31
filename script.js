let playerSelection = "";
let computerSelection ="";

playerSelection = playerChoice();
computerSelection = getComputerChoice();
round(playerSelection, computerSelection);

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
    if (human.toLowerCase() == "rock") {
        switch (comp) {
            case "rock":
                console.log("Same choice!");
                break;
            case "paper":
                console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                break;
            case "scissors":
                console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                break;
        }
    }
    else if (human.toLowerCase() == "paper") {
        switch (comp) {
            case "paper":
                console.log("Same choice!");
                break;
            case "scissors":
                console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                break;
            case "rock":
                console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                break;
        }
    }
    else if (human.toLowerCase() == "scissors") {
        switch (comp) {
            case "scissors":
                console.log("Same choice!");
                break;
            case "rock":
                console.log(`You lose! ${comp.toLowerCase()} beats ${human.toLowerCase()}!`);
                break;
            case "paper":
                console.log(`You win! ${human.toLowerCase()} beats ${comp.toLowerCase()}!`);
                break;
        }
    }
}