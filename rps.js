
function computerPlay() {
    x = Math.floor(Math.random() * 3);
    if(x === 0) { return "rock"; } else if (x === 1) { return "paper"; } else { return "scissors"; }
}

let computerScore = 0;
let playerScore = 0;
let r = document.getElementById('result');
let c = document.getElementById('choice');

function check(){

    if (playerScore >= 5) {
        c.innerHTML = "<img src='./player.png'>"
        r.innerHTML = `<h1> <strong>END!!</strong> player wins!! <br></h1> <button style="width: 100px;margin: 0 auto;" onclick = "location.reload();">Restart</button> `;
        playerScore = computerScore = 0;
    } else if (computerScore >= 5) {
        c.innerHTML = "<img src='./pc.webp'>";
        r.innerHTML = `<h1> <strong>END!!</strong> computer wins!!<br></h1> <button style="width: 100px;margin: 0 auto;" onclick = "location.reload();">Restart</button>`;
        playerScore = computerScore = 0;
    }
}

function rock() {
    switch(computerPlay()) {
        case 'rock':
            r.innerHTML = 'tie';
            break;
        case 'paper':
            r.innerHTML = 'pc wins';
            computerScore++;
            break;
        case 'scissors':
            r.innerHTML = 'player win';
            playerScore++;
            break;
    }
    check();
}


function paper() {
    switch(computerPlay()) {
        case 'rock':
            r.innerHTML ='player wins';
            break;
        case 'paper':
            r.innerHTML ='tie';
            computerScore++;
            break;
        case 'scissors':
            r.innerHTML ='pc win';
            playerScore++;
            break;
    }
    check();
}


function scissors() {
    switch(computerPlay()) {
        case 'rock':
            r.innerHTML ='pc wins';
            break;
        case 'paper':
            r.innerHTML ='player wins';
            computerScore++;
            break;
        case 'scissors':
            r.innerHTML ='tie';
            playerScore++;
            break;
    }
    check();
}
