/*jshint esversion: 6*/

// The DOM
const diceComputer= document.getElementById('dice-computer');
const dicePlayer = document.getElementById("dice-player");
const photos1 = document.getElementById('photo1');
const photos2 = document.getElementById('photo2');
let scoreAreaComputer =parseInt(document.getElementById('score-area-computer').innerText,10);
let scoreAreaPlayer =parseInt(document.getElementById('score-area-player').innerText,10);
const wins = document.getElementById('win');
const results = document.getElementById('result');
const mains = document.getElementById('main-second');


//To get random number for computer
function faceDiceComputer() {
    return Math.ceil(Math.random() * 6);
}

//To get random number for player
function faceDicePlayer() {
    return Math.ceil(Math.random() * 6);
}

// Rolling the dice
function roll() {
    let computer = faceDiceComputer();
    let player = faceDicePlayer();

    // The random dice
    diceComputer.innerText = computer;
    dicePlayer.innerText = player;

    // Here where to change the photos according the dice
    photos1.src = `assets/images/d${computer}.png`;
    photos2.src = `assets/images/d${player}.png`;

    //All the process after the clicking
    //Also here the game over screen
    if (player >= computer) {
        document.getElementById('score-area-player').innerText = `${++scoreAreaPlayer}`;
        if (scoreAreaPlayer >= 15) {
            alert("The Game is over, You won");
            mains.style.visibility = 'hidden';
            wins.style.visibility = 'visible';
            results.innerText = `You got 15 scores, you Won`;
        }
    } else if (computer === player) {
        document.getElementById('score-area-computer').innerText = `${++scoreAreaComputer}`;
        document.getElementById('score-area-player').innerText = ` ${++scoreAreaPlayer}`;
    } else {
        document.getElementById('score-area-computer').innerText = `${++scoreAreaComputer}`;
        if (scoreAreaComputer >= 15) {
            alert("The Game is over, You lost");
            mains.style.visibility = 'hidden';
            wins.style.visibility = 'visible';
            results.innerText = `Computer got 15 scores You lost`;
        }
    }
}
