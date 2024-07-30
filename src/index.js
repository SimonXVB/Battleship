import "./styles.css";

class Ship {
    constructor (name, length, amount){
        this.name = name;
        this.length = length;
        this.amount = amount;

        this.timesHit = 0;
        this.sunk = false;
    }

    hit() {
        this.timesHit++;

        if(this.length === this.timesHit) {
            this.sunk = true;
        }
    }
};

class Gameboard {
    constructor (){
        this.board =   [[0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]]
    }

    placeShipVertical(hor, ver, length) {
        for(let i = 0; i < length; i++) {
            if(this.board[ver + i] === undefined) {
                console.log("OOB ver");
                return
            }
        }

        for(let i = 0; i < length; i++) {
            if(this.board[ver + i][hor] === "X"){
                console.log("Not possible ver");
                return
            } else {
                this.board[ver + i][hor] = "X";
            }
        }
    };

    placeShipHorizontal(hor, ver, length) {
        for(let i = 0; i < length; i++) {
            if(this.board[ver][hor + i] === undefined) {
                console.log("OOB hor");
                return
            }
        }

        for(let i = 0; i < length; i++) {
            if(this.board[ver][hor + i] === "X") {
                console.log("Not possible hor");
                return
            } else {
                this.board[ver][hor + i] = "X";
            }
        }
    }
};

const board = new Gameboard();
board.placeShipHorizontal(0, 5, 5);
board.placeShipVertical(0, 0, 4);

console.log(board)