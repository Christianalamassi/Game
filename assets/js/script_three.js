// the adopting area of Elements
const dicesA = document.getElementById('diceA');
const dicesB = document.getElementById("diceB");
const photos1 = document.getElementById('photo1');
const photos2 = document.getElementById('photo2');
let scoreArea1 = document.getElementById('score-area1').innerText;
let scoreArea2 = document.getElementById('score-area2').innerText;
const wins = document.getElementById('win');
const results = document.getElementById('result');
const mains = document.getElementById('main-second');


/**function to get random number */
function faceDiceA() {
    return Math.ceil(Math.random() * 6);
}

function faceDiceB() {
    return Math.ceil(Math.random() * 6);
}

// function to roll the dice
function roll() {
    let fa = faceDiceA();
    let fb = faceDiceB();

    // the random dice
    dicesA.innerText = fa;
    dicesB.innerText = fb;

    // here where to change the photos according the dice
    photos1.src = `assets/images/d${fa}.png`;
    photos2.src = `assets/images/d${fb}.png`;

    //all the process after the clicking
    //also here the game over screen
    if (fb > fa) {
        document.getElementById('score-area2').innerText = `${++scoreArea2}`;
        if (scoreArea2 >= 15) {
            alert("The Game is over, You won");
            mains.style.visibility = 'hidden';
            wins.style.visibility = 'visible';
            results.innerText = `You Won`;
        }
    } else if (fa === fb) {
        document.getElementById('score-area1').innerText = `${++scoreArea1}`;
        document.getElementById('score-area2').innerText = ` ${++scoreArea2}`;
    } else {
        document.getElementById('score-area1').innerText = `${++scoreArea1}`;
        if (scoreArea1 >= 15) {
            alert("The Game is over, You lost");
            mains.style.visibility = 'hidden';
            wins.style.visibility = 'visible';
            results.innerText = `You lost`;
        }
    }
}

/**the click audio */
let audio = new Audio();
audio.src = "assets/audio/mouse.mp3";