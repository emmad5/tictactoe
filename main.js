document.addEventListener('DOMContentLoaded', loadGame);
let isX = true;


function loadGame() {
    const squares = Array.from(document.querySelectorAll('.square'));
    const button = document.querySelector('.button');
    button.addEventListener('click', () => clearBoard(squares));
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i]
        square.addEventListener('click', () => playTurn(square, i, squares));
    }  
}
function clearBoard(squares) {
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        square.innerHTML = '';
    }
}
function playTurn(square, i, squares) {
    console.log(getPosition(i, squares));
    if (!isOver(squares)) {
        let mark = document.createElement('div')
        if (square.innerHTML === '') {
            if (isX) {
                mark.innerHTML = 'x';
                isX = false;
                square.appendChild(mark);
            } else {
                mark.innerHTML = 'o';
                isX = true;
                square.appendChild(mark);
            }
        }
    } else {
        alert('game over');
        clearBoard(squares)
    }
}

function isOver(squares) {
    if (getPosition(0, squares) === getPosition(1, squares) && getPosition(0, squares) === getPosition(2, squares)) {
        return true;
    }
    if (getPosition(3, squares) === getPosition(4, squares) && getPosition(3, squares) === getPosition(5, squares)) {
        return true;
    }
    if (getPosition(6, squares) === getPosition(7, squares) && getPosition(7, squares) === getPosition(8, squares)) {
        return true;
    }
    if (getPosition(0, squares) === getPosition(3, squares) && getPosition(0, squares) === getPosition(6, squares)) {
        return true;
    }
    if (getPosition(1, squares) === getPosition(4, squares) && getPosition(1, squares) === getPosition(7, squares)) {
        return true;
    }
    if (getPosition(2, squares) === getPosition(5, squares) && getPosition(2, squares) === getPosition(8, squares)) {
        return true;
    }
    if (getPosition(0, squares) === getPosition(4, squares) && getPosition(0, squares) === getPosition(8, squares)) {
        return true;
    }
    if (getPosition(2, squares) === getPosition(4, squares) && getPosition(2, squares) === getPosition(6, squares)) {
        return true;
    }
}

function getPosition(index, squares) {
   if(squares[index].childElementCount === 0 ) {
       return index;
   } else {
       return squares[index].innerHTML;
   }
}

