let playerSelection = "";
let computerSelection ="";

//playerSelection = playerChoice();
computerSelection = getComputerChoice();

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