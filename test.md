const elements = document.querySelectorAll('[data-cell]')
var ticTac = document.getElementById('tic_tac')
const restartButton = document.getElementById('restart')

var score = [
    [6, 7, 8],
    [3, 4, 5],
    [0, 1, 2],
    [2, 5, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [0, 4, 8],
] 

options = ["", "", "", "", "", "", "", "", "",]

let playerTurn
let computerTurn

let running

var gameSection = document.getElementsByClassName('game_section');
var results = document.getElementById('result');


restartButton.addEventListener('click', startGame);



function startGame(){
    
    elements.forEach(cell =>{
        cell.classList.remove(playerTurn)
        cell.classList.remove(computerTurn)
        cell.removeEventListener('click',playerClick)
    })
    elements.forEach(cell =>{
        cell.addEventListener('click', playerClick, {once:true})
    })
}

function playerClick(e){
    const cell = e.target
    // var currentClass;
    //     if (running){
    //         currentClass = playerTurn
    //         return markX(cell, currentClass);
    //     }else if(running){
    //         currentClass = computerTurn
    //         return markO(cell, currentClass);
    //     };
    const currentClass = running ? computerTurn : playerTurn
    mark(cell, currentClass)
    
    if (winning(currentClass)) {
    }
    switchPlayers();
}

function mark(cell, currentClass){
    let playerTurn = cell.style.backgroundImage ='url("assets/images/x.jpg")';
    let computerTurn = cell.style.backgroundImage ='url("assets/images/o.png")';
    playerTurn.classList.add(currentClass);
    computerTurn.classList.add(currentClass);
}


function switchPlayers(){
    running = !running
}

// function computerClick(e){
//     var cell = e.target
//     var currentClass = running?  computerTurn:playerTurn 
//     markO(cell, currentClass);
// }





function winning(currentClass) {
    return score.some(combination => {
        return combination.every(index => {
            return elements[index].classList.contains(currentClass)
        })
    })
}

function losing(currentClass){

}

function drawing(currentClass){

}

startGame()




x.src = "/assets/images/x.jpg";