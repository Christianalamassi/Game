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
    running = '';

    let gameState = ["", "", "", "", "", "", "", "", ""];

    // restartButton.addEventListener('click', restartGame)


    elements.forEach(cell =>{
        cell.addEventListener('click',playerTurn, {once:true})
    });

    function playerTurn(cell){
        const clickedCell = cell.target;
        const currentClass = running ? computer : player
        mark(clickedCell, currentClass);
        checkWin(currentClass)
        // if checkWin(currentClass){
        //     gameOver()
        // }
        switchTurn ()
        computerTurn()
    }


    function mark(clickedCell, currentClass) {
        clickedCell.classList.add(currentClass)
    }

    function switchTurn () {
        running = !running
    }

    // function result()
    // function resartGame()

    // let the computer make the next move
    function computerTurn(){
            const elements = gameState
                .map((cell, index) => (cell === '' ? index : null))
                .filter(index => index !== null);
    
            if (elements.length === 0) {
                return;
            }
    
            const randomIndex = elements[Math.floor(Math.random() * elements.length)];
            board[randomIndex] = 'imgo';
            document.querySelector(`.cell[data-index='${randomIndex}']`).innerText = 'imgo';
            document.querySelector(`.cell[data-index='${randomIndex}']`).classList.add('taken');
            checkResult();
            if (gameActive) {
                currentPlayer = 'imgx';
                updateMessage();
            }
        }

    function checkWin(currentClass) {
        return winningScore.some(combination => {
            return combination.every(index => {
            return elements[index].classList.contains(currentClass)
            })
        })
    }
});