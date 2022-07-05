function play(computerPlay, playerSelection) {
    
    for (let i = 0; i < 5; i++) {
      
    function computerPlay() {
        x = Math.floor(Math.random() * 3);
        if(x === 0) { return "piedra"; } else if (x === 1) { return "papel"; } else { return "tijera"; }
    }

    playerSelection = prompt("Piedra papel o tijera?").toLowerCase();
    x = computerPlay();

    if(x == playerSelection) {
        console.log("Empate");
    }
    else if (x == "piedra" && playerSelection == "tijera") { console.log("Gana la PC"); }
    else if (x == "piedra" && playerSelection == "papel") { console.log("Gana el jugador"); }
    else if (x == "papel" && playerSelection == "tijera") { console.log("Gana el jugador"); }
    else if (x == "papel" && playerSelection == "piedra") { console.log("Gana la PC"); }
    else if (x == "tijera" && playerSelection == "piedra") { console.log("Gana el jugador"); }
    else if (x == "tijera" && playerSelection == "papel") { console.log("Gana la PC"); }
    else { console.log("Mmm... escribiste mal tu mano!"); }

    console.log("PC: " + x + "| Jugador: " + playerSelection);
    }
}