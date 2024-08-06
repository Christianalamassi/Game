window.addEventListener('DOMContentLoaded', () => {

    var elements = document.querySelectorAll('[data-cell]');
    var gameSection = document.getElementById('game_section')
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

    elements.forEach(cell =>{
        cell.addEventListener('click',onClick, {once:true})
    });

    //User interaction with the panel
    function onClick(cell){
        const clickedCell = cell.target;
        if (!clickedCell.classList.contains(player) && !clickedCell.classList.contains(computer)) {
            const currentClass = running ? computer : player;
            mark(clickedCell, currentClass);
            if (checkWin(currentClass)) {
                gameover(false);
            } else if (draw()) {
                gameover(true);
            } else {
                switchTurn();
                if (running) {
                    /* Spare time to pretend AI thinks */
                    let spareTime = ((Math.random() * 1000) + 200).toFixed();
                    setTimeout(() => {
                        computerTurn();
                    }, spareTime);
                }
            }
        }
    }

    // Let the computer make the next move
    function computerTurn() {
        if (running) {
            let array = [];

           // Find the remaining square that has not  mark
            for (let i = 0; i < elements.length; i++) {
                //prevent the user and computer to add elements to existing elements.
            if (!elements[i].classList.contains(player) && !elements[i].classList.contains(computer)) {
                array.push(elements[i]);
            }
        }
            // Get a random box from the remaining tiles
            if (array.length > 0) {
                let randomBox = array[Math.floor(Math.random() * array.length)];

                // Mark the cell for the computer
                mark(randomBox, computer);

                // Check for a win or draw after the computer's move
                if (checkWin(computer)) {
                    gameover(false);
                } else if (draw()) {
                    gameover(true);
                } else {
                    switchTurn();
                }
            }
        }
    }
    // Set the mark on the panel
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

    function checkWin(currentClass) {
        return winningScore.some(combination => {
            return combination.every(index => {
            return elements[index].classList.contains(currentClass)
            })
        })
    }
});
