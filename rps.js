
function computerPlay() {
    x = Math.floor(Math.random() * 3);
    if(x === 0) { return "rock"; } else if (x === 1) { return "paper"; } else { return "scissors"; }
}

let computerScore = 0;
let playerScore = 0;
let r = document.getElementById('result');
let c = document.getElementById('choice');
let body = document.querySelector("body");

function check(){

    if (playerScore >= 5) {
        c.innerHTML = "<img src='./end.png'>"
        r.innerHTML = `<h1> <strong>END!!</strong> player wins!! <br></h1> <button style="width: 450px;height:130px;margin: 0 auto;font-size:48px;" onclick = "location.reload();">RESTART</button> 
        <br><br>FINAL SCORE <br> PC: ${computerScore},   PLAYER: ${playerScore}`;
        body.setAttribute("style","background-color:#28b4e5 !important;color:white;font-family: Helvetica;text-align: center;display: flex;flex-flow: column;height: 1080px;justify-content: center;");
        playerScore = computerScore = 0;
    } else if (computerScore >= 5) {
        c.innerHTML = "<img src='./end.png'>";
        r.innerHTML = `<h1> <strong>END!!</strong> computer wins!!<br></h1> <button style="width: 450px;height:130px;margin: 0 auto;font-size:48px;" onclick = "location.reload();">RESTART</button>
        <br><br>FINAL SCORE <br> PC: ${computerScore},   PLAYER: ${playerScore}`;
        body.addAttribute("style","background-color:#28b4e5 !important;color:white;font-family: Helvetica;text-align: center;display: flex;flex-flow: column;height: 1080px;justify-content: center;");
        playerScore = computerScore = 0;
    }
}

function rock() {
    switch(computerPlay()) {
        case 'rock':
            r.innerHTML = `tie <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
        case 'paper':
            computerScore++;
            r.innerHTML = `pc wins <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
        case 'scissors':
            playerScore++;
            r.innerHTML = `player win <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
    }
    check();
}


function paper() {
    switch(computerPlay()) {
        case 'rock':
            playerScore++;
            r.innerHTML =`player win <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
        case 'paper':
            r.innerHTML =`tie <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
        case 'scissors':
            computerScore++;
            r.innerHTML =`pc wins <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
    }
    check();
}


function scissors() {
    switch(computerPlay()) {
        case 'rock':
            computerScore++;
            r.innerHTML =`pc wins <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
        case 'paper':
            playerScore++;
            r.innerHTML =`player win <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
        case 'scissors':
            r.innerHTML =`tie <br> computer: ${computerScore}|  player: ${playerScore}`;
            break;
    }
    check();
}
