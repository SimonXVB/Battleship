import "./styles.css";

class Ship {
    constructor (name, length, marking){
        this.name = name;
        this.length = length;
        this.marking = marking;

        this.sunk = false;
        this.placed = false;
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
                        [0,0,0,0,0,0,0,0,0,0]];

        this.missed = 0;
        this.totalSunk = 0;
    }

    placeShipVertical(hor, ver, length, marking) {
        for(let i = 0; i < length; i++) {
            if(this.board[ver + i] === undefined) {
                console.log("OoB ver");
                return
            }
        }

        for(let i = 0; i < length; i++) {
            if(this.board[ver + i][hor] !== 0){
                console.log("Not possible ver");
                return
            } else {
                this.board[ver + i][hor] = marking;
            }
        }
    };

    placeShipHorizontal(hor, ver, length, marking) {
        for(let i = 0; i < length; i++) {
            if(this.board[ver][hor + i] === undefined) {
                console.log("OoB hor");
                return
            }
        }

        for(let i = 0; i < length; i++) {
            if(this.board[ver][hor + i] !== 0) {
                console.log("Not possible hor");
                return
            } else {
                this.board[ver][hor + i] = marking;
            }
        }
    }
    
    receiveAttack(hor, ver) {
        if(this.board[ver][hor] !== 0) {
            this.board[ver][hor] = "H";
            //console.log(`Hit at [${hor}-${ver}]`);
            return
        } else {
            this.missed++;
            //console.log(`Miss at [${hor}-${ver}] Attacks missed: ${this.missed}`);
        }
    };
};

class Game {
    constructor() {
        this.board = new Gameboard();

        this.carrier1 = new Ship("Carrier", 5, "C1");

        this.battleship1 = new Ship("Battleship", 4, "B1");
        this.battleship2 = new Ship("Battleship", 4, "B2");

        this.destroyer1 = new Ship("Destroyer", 3, "D1");
        this.destroyer2 = new Ship("Destroyer", 3, "D2");
        this.destroyer3 = new Ship("Destroyer", 3, "D3");

        this.submarine1 = new Ship("Submarine", 3, "S1");
        this.submarine2 = new Ship("Submarine", 3, "S3");
        this.submarine3 = new Ship("Submarine", 3, "S3");
        this.submarine4 = new Ship("Submarine", 3, "S4");

        this.patrol_boat1 = new Ship("Patrol Boat", 2, "P1");
        this.patrol_boat2 = new Ship("Patrol Boat", 2, "P2");
        this.patrol_boat3 = new Ship("Patrol Boat", 2, "P3");
        this.patrol_boat4 = new Ship("Patrol Boat", 2, "P4");
        this.patrol_boat5 = new Ship("Patrol Boat", 2, "P5");
    };

    placeVer(ship, hor, ver) {
        if(ship.placed === true) {
            console.log("Ship already placed");
            return;
        }
        
        this.board.placeShipVertical(hor, ver, ship.length, ship.marking);
        ship.placed = true;
    };

    placeHor(ship, hor, ver) {
        if(ship.placed === true) {
            console.log("Ship already placed");
            return;
        }

        this.board.placeShipHorizontal(hor, ver, ship.length, ship.marking);
        ship.placed = true;
    };

    hit(hor, ver) {
        switch(this.board.board[ver][hor]) {
            case "C1":
                console.log("Carrier has been hit");
                break;
                //
            case "B1":
                this.battleship1.length--;
                console.log("Battleship has been hit");
                break;
            case "B2":
                this.battleship2.length--;
                console.log("Battleship has been hit");
                break;
                //
            case "D1":
                this.destroyer1.length--;
                console.log("Destroyer has been hit");
                break;
            case "D2":
                this.destroyer2.length--;
                console.log("Destroyer has been hit");
                break;
            case "D3":
                this.destroyer3.length--;
                console.log("Destroyer has been hit");
                break;
                //
            case "S1":
                this.submarine1.length--
                console.log("Submarine has been hit");
                break;
            case "S2":
                this.submarine2.length--
                console.log("Submarine has been hit");
                break;
            case "S3": 
                this.submarine3.length--
                console.log("Submarine has been hit");
                break;
            case "S4": 
                this.submarine4.length--
                console.log("Submarine has been hit");
                break;
                //
            case "P1":
                this.patrol_boat1.length--;
                console.log("Patrol Boat has been hit");
                break;
            case "P2":
                this.patrol_boat2.length--;
                console.log("Patrol Boat has been hit");
                break;
            case "P3":
                this.patrol_boat3.length--;
                console.log("Patrol Boat has been hit");
                break;
            case "P4":
                this.patrol_boat4.length--;
                console.log("Patrol Boat has been hit");
                break;
            case "P5":
                this.patrol_boat5.length--;
                console.log("Patrol Boat has been hit");
                break;
            default:
                console.log("Missed");
        }

        this.board.receiveAttack(hor, ver);
        this.checkSunk();
        this.checkWin();
    }

    checkSunk() {
        for(const entry in this) {
            if(this[entry].length === 0) {
                this.board.totalSunk++;
                this[entry].sunk = true;
                console.log(`${this[entry].name} has been sunk!`);
            }
        }
    }

    checkWin() {
        if(this.board.totalSunk === 15) {
            console.log("You win");
            console.log(this.board.totalSunk)
            return
        } else {
            return;
        }
    }

    setSunk() {
        this.board.totalSunk = 15;
    }
}

function reset() {
    game = new Game();
}

let game = new Game();
game.placeVer(game.patrol_boat4, 0,0);
game.hit(0,0);
game.hit(0,1);

console.log(game);