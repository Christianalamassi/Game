// the adopting area of Elements
const diceComputer= document.getElementById('dice-computer');
const dicePlayer = document.getElementById("dice-player");
const photos1 = document.getElementById('photo1');
const photos2 = document.getElementById('photo2');
let scoreAreaComputer = document.getElementById('score-area-computer').innerText;
let scoreAreaPlayer = document.getElementById('score-area-player').innerText;
const wins = document.getElementById('win');
const results = document.getElementById('result');
const mains = document.getElementById('main-second');


/**function to get random number */
function faceDiceComputer() {
    return Math.ceil(Math.random() * 6);
}

function faceDicePlayer() {
    return Math.ceil(Math.random() * 6);
}

// function to roll the dice
function roll() {
    let computer = faceDiceComputer();
    let player = faceDicePlayer();

    // the random dice
    diceComputer.innerText = computer;
    dicePlayer.innerText = player;

    // here where to change the photos according the dice
    photos1.src = `assets/images/d${computer}.png`;
    photos2.src = `assets/images/d${player}.png`;

    //all the process after the clicking
    //also here the game over screen
    if (player > computer) {
        document.getElementById('score-area-player').innerText = `${++scoreAreaPlayer}`;
        if (scoreAreaPlayer >= 15) {
            alert("The Game is over, You won");
            mains.style.visibility = 'hidden';
            wins.style.visibility = 'visible';
            results.innerText = `You Won`;
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
            results.innerText = `You lost`;
        }
    }
}

// /**the click audio */
// let audio = new Audio();
// audio.src = "assets/audio/mouse.mp3";