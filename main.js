document.addEventListener('DOMContentLoaded', () => new Board());

class Board {
    constructor() {
        this.board = Array.from(document.querySelectorAll('.square'));
        this.button = document.querySelector('.button');
        this.playTurn = this.playTurn.bind(this);
        this.clearBoard = this.clearBoard.bind(this);
        this.isX = true;
        this.button.addEventListener('click', () => this.clearBoard());
            for (let i = 0; i < this.board.length; i++) {
                let square = this.board[i];
                square.addEventListener('click', () => this.playTurn(square, i));
            }  
    }

    playTurn(square, i) {
        console.log(this.getPosition(i));
        if (!this.isOver()) {
            this.x = document.querySelector('.x');
            let mark = document.createElement('div');
            if (square.innerHTML === '') {
                if (this.isX) {
                    mark.innerHTML = 'x';
                    this.x.innerHTML = 'Player O, your turn';
                    this.isX = false;
                    square.appendChild(mark);
                    if (this.isOver()) {
                        setTimeout(function () {
                            alert("game over, X won");
                        }, 250);
                    }
                } else {
                    mark.innerHTML = 'o';
                    this.isX = true;
                    this.x.innerHTML = 'Player X, your turn';
                    square.appendChild(mark);
                    if (this.isOver()) {
                        setTimeout(function () { 
                            alert("game ove, O won"); 
                        }, 250);   
                    } 
                }
            }
        } 
    }
    isOver() {
        if (this.getPosition(0, this.board) === this.getPosition(1, this.board) && this.getPosition(0, this.board) === this.getPosition(2, this.board)) {
            return true;
        }
        if (this.getPosition(3, this.board) === this.getPosition(4, this.board) && this.getPosition(3, this.board) === this.getPosition(5, this.board)) {
            return true;
        }
        if (this.getPosition(6, this.board) === this.getPosition(7, this.board) && this.getPosition(7, this.board) === this.getPosition(8, this.board)) {
            return true;
        }
        if (this.getPosition(0, this.board) === this.getPosition(3, this.board) && this.getPosition(0, this.board) === this.getPosition(6, this.board)) {
            return true;
        }
        if (this.getPosition(1, this.board) === this.getPosition(4, this.board) && this.getPosition(1, this.board) === this.getPosition(7, this.board)) {
            return true;
        }
        if (this.getPosition(2, this.board) === this.getPosition(5, this.board) && this.getPosition(2, this.board) === this.getPosition(8, this.board)) {
            return true;
        }
        if (this.getPosition(0, this.board) === this.getPosition(4, this.board) && this.getPosition(0, this.board) === this.getPosition(8, this.board)) {
            return true;
        }
        if (this.getPosition(2, this.board) === this.getPosition(4, this.board) && this.getPosition(2, this.board) === this.getPosition(6, this.board)) {
            return true;
        }
    }

    clearBoard() {
        for (let i = 0; i < this.board.length; i++) {
            let square = this.board[i];
            square.innerHTML = '';
        }
    }

    getPosition(index) {
        if(this.board[index].childElementCount === 0 ) {
            return index;
        } else {
            return this.board[index].innerHTML;
        }
    }
}