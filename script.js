let playerSelection = "";
let computerSelection ="";

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


    playerSelection = playerChoice();




function getComputerChoice() {
    
}