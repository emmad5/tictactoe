document.addEventListener('DOMContentLoaded', () => new Board());

class Board {
    constructor() {
        this.board = document.querySelectorAll('.square');
        console.log(document.querySelectorAll('.square'));
        this.button = document.querySelector('.button');
        this.playTurn = this.playTurn.bind(this);
        this.isX = true;
        this.button.addEventListener('click', () => this.clearBoard());
            for (let i = 0; i < this.board.length; i++) {
                let square = this.board[i];
                square.addEventListener('click', () => this.playTurn(square, i));
            }  
    }

    playTurn(square, i) {
        console.log(this.getPosition(i));
        if (!this.isOver(this.board)) {
            let mark = document.createElement('div');
            if (square.innerHTML === '') {
                if (this.isX) {
                    mark.innerHTML = 'x';
                    this.isX = false;
                    square.appendChild(mark);
                } else {
                    mark.innerHTML = 'o';
                    this.isX = true;
                    square.appendChild(mark);
                }
            }
        } else {
            alert('game over');
            this.clearBoard();
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