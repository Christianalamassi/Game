const elements = document.querySelectorAll('[data-cell]')
var player 
var computer
var playeTurn
var computerTurn
var tic_tacs = document.getElementById('tic_tac')
var gameSection = document.getElementsByClassName('game_section')
var results = document.getElementById('result')

elements.forEach(pic =>{
    pic.addEventListener('click', handleClick, {once:true} )
})

function handleClick(e){
    var pic = e.target
    var currentClass = computerTurn? computer:player
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