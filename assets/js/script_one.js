window.addEventListener('DOMContentLoaded', () => {

    var elements = document.querySelectorAll('[data-cell]');
    var ticTac = document.getElementById('tic_tac');
    var gameSection = document.getElementById('game_section')
    var restartButton = document.getElementById('restart');
    const results = document.getElementById('result')
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
    var running
    var gameState = ["", "", "", "", "", "", "", "", ""];


    elements.forEach(cell =>{
        cell.addEventListener('click',playerTurn, {once:true})
    });

    function playerTurn(cell){
        const clickedCell = cell.target;
        const currentClass = running ? computer : player
        mark(clickedCell, currentClass);
        // computerTurn();
        if (checkWin(currentClass)){
            gameover(false)
            console.log('win')
        }else if (draw()) {
            gameover(true)
            console.log('draw')
        } else {
            switchTurn () 
            console.log('switch')
        }
    }

    function mark(clickedCell, currentClass) {
        clickedCell.classList.add(currentClass)
    }

    function switchTurn () {
        running = !running
    }

    function gameover(nowinner){
        if (nowinner){
            results.innerText = "Gameover 'Draw!'"
        }else{
            results.innerText = `${running ? 'Computer':'You'} won`
        }
        gameSection.classList.add('show')
    }

    function draw(){
        return [...elements].every(cell =>{
            return cell.classList.contains(computer) || cell.classList.contains(player)
        })
    }

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