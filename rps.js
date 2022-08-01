
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

    if(computerSelection == playerSelection) { document.write("Its a tie!"); }
    else if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") { document.write("PC Wins!"); computerScore++; }
    else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") { document.write("Player wins!"); playerScore++;}
    else if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") { document.write("Player wins!"); playerScore++;}
    else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") { document.write("PC Wins!"); computerScore++;}
    else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") { document.write("Player wins!"); playerScore++;}
    else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") { document.write("PC Wins!"); computerScore++;}
    else { document.write("\nMmm... you pick a bad weapon!"); }

    if (computerScore >= 5) {
        document.write("\nEnd of the game! PC Wins!");
        break;
    } else if(playerScore >= 5) {
        document.write("\nEnd of the game! Player wins!");
        playerScore = 0; computerScore = 0;
        break;
    }

    document.write("\nPC: " + computerSelection + " | Player: " + playerSelection);
    }
}

