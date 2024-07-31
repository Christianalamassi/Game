const elements = document.querySelectorAll('[data-cell]')
var ticTac = document.getElementById('tic_tac')
const restartButton = document.getElementById('restart')

var player = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] 
var computer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] 
var playeTurn
var computerTurn

var gameSection = document.getElementsByClassName('game_section')
var results = document.getElementById('result')

elements.forEach(pic =>{
    pic.addEventListener('click', handleClick, {once:true} )
})

// restartButton.addEventListener('click', startGame)



function handleClick(e){
    var pic = e.target
    var currentClass = playeTurn? player:computer
    mark(pic, currentClass)
}

function mark(pic, currentClass){
    pic.style.backgroundImage ='url("assets/images/x.jpg")';
}

// function play(){
    
// }

/* 
function gameOver({

    //check if winning 

    // check if drawing

    //check if losing

    if (computer <= player){
            gameSection.style.display = "block";
            result.innerHTML = "You won";
    }
    else if (computer == player){
        gameSection.style.display = "block";
        result.innerHTML = "Draw!";
    }
    else{
        gameSection.style.display = "block";
        result.innerHTML = "You lost";
    }
})
*/

// function restartGame(){

// }