window.addEventListener('DOMContentLoaded', () => {

    var elements = document.querySelectorAll('[data-cell]');
    var ticTac = document.getElementById('tic_tac');
    var textResult = document.getElementById('result')
    var restartButton = document.getElementById('restart');

    // var imgx = document.createElement('img');
    // imgx.src = "/assets/images/x.jpg";
    // var imgo = document.createElement('img');
    // imgo.src = "/assets/images/o.png";


    var player = 'imgx';
    var computer = 'imgo';

    var winningScore = [
        [6, 7, 8],
        [3, 4, 5],
        [0, 1, 2],
        [2, 5, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 6],
        [0, 4, 8],
    ] ;
    running = false;

    let gameState = ["", "", "", "", "", "", "", "", ""];

    // restartButton.addEventListener('click', restartGame)

    elements.forEach(cell =>{
        cell.addEventListener('click',playerTurn, {once:true})
    });

    function playerTurn(cell){
        const clickedCell = cell.target;
        console.log(clickedCell)
        const currentClass = running ? player : computer
        console.log(currentClass)
        mark(clickedCell, currentClass)
    }


    function mark(clickedCell, currentClass) {
        clickedCell.classList.add(currentClass)
    }

    // function result()
    // function resartGame()
    // function computerTurn()

});