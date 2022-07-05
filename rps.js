
function computerPlay() {
    x = Math.floor(Math.random() * 3);
    if(x === 0) { return "rock"; } else if (x === 1) { return "paper"; } else { return "scissors"; }
}

let computerScore = 0;
let playerScore = 0;

function play(computerSelection, playerSelection) {
    
    for (let i = 0; i < 50; i++) {

    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = computerPlay();

    if(computerSelection == playerSelection) { console.log("Its a tie!"); }
    else if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") { console.log("PC Wins!"); computerScore++; }
    else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") { console.log("Player wins!"); playerScore++;}
    else if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") { console.log("Player wins!"); playerScore++;}
    else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") { console.log("PC Wins!"); computerScore++;}
    else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") { console.log("Player wins!"); playerScore++;}
    else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") { console.log("PC Wins!"); computerScore++;}
    else { console.log("\nMmm... you pick a bad weapon!"); }

    if (computerScore >= 5) {
        console.log("\nEnd of the game! PC Wins!");
        break;
    } else if(playerScore >= 5) {
        console.log("\nEnd of the game! Player wins!");
        playerScore = 0; computerScore = 0;
        break;
    }

    console.log("\nPC: " + computerSelection + " | Player: " + playerSelection);
    }
}

