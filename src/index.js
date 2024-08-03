import "./styles.css";

class Ship {
    constructor (name, length, marking){
        this.name = name;
        this.length = length;
        this.marking = marking;

        this.sunk = false;
        this.placed = false;
    };
};

class Game {
    constructor() {
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
        
        this.carrier1 = new Ship("Carrier 1", 5, "C1");
        
        this.battleship1 = new Ship("Battleship 1", 4, "B1");
        this.battleship2 = new Ship("Battleship 2", 4, "B2");
        
        this.destroyer1 = new Ship("Destroyer 1", 3, "D1");
        this.destroyer2 = new Ship("Destroyer 2", 3, "D2");
        this.destroyer3 = new Ship("Destroyer 3", 3, "D3");
        
        this.submarine1 = new Ship("Submarine 1", 3, "S1");
        this.submarine2 = new Ship("Submarine 2", 3, "S3");
        this.submarine3 = new Ship("Submarine 3", 3, "S3");
        this.submarine4 = new Ship("Submarine 4", 3, "S4");
        
        this.patrol_boat1 = new Ship("Patrol Boat 1", 2, "P1");
        this.patrol_boat2 = new Ship("Patrol Boat 2", 2, "P2");
        this.patrol_boat3 = new Ship("Patrol Boat 3", 2, "P3");
        this.patrol_boat4 = new Ship("Patrol Boat 4", 2, "P4");
        this.patrol_boat5 = new Ship("Patrol Boat 5", 2, "P5");
        
        this.currentShip = this.carrier1;
    };

    placeVer(ship, hor, ver) {
        if(ship.placed === true) {
            console.log("Ship already placed");
            return;
        }
        
        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i] === undefined) {
                console.log("OoB ver");
                return
            }
        }

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i][hor] !== 0){
                console.log("Not possible ver");
                return
            } else {
                this.board[ver + i][hor] = ship.marking;
            }
        }

        ship.placed = true;
    };

    placeHor(ship, hor, ver) {
        if(ship.placed === true) {
            console.log("Ship already placed");
            return;
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] === undefined) {
                console.log("OoB hor");
                return
            }
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] !== 0) {
                console.log("Not possible hor");
                return
            } else {
                this.board[ver][hor + i] = ship.marking;
            }
        };

        ship.placed = true;
    };

    hit(hor, ver) {
        switch(this.board[ver][hor]) {
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

        if(this.board[ver][hor] !== 0) {
            this.board[ver][hor] = "H";
            return
        } else {
            this.missed++;
        }

        this.checkSunk();
        this.checkWin();
    };

    checkSunk() {
        for(const entry in this) {
            if(this[entry].length === 0) {
                this.totalSunk++;
                this[entry].sunk = true;
                console.log(`${this[entry].name} has been sunk!`);
            }
        }
    };

    checkWin() {
        if(this.totalSunk === 15) {
            console.log("You win");
            console.log(this.totalSunk)
            return
        } else {
            return;
        }
    };

    setSunk() {
        this.totalSunk = 15;
    };

    setPlaced() {
        for(const entry in this) {
            if(this[entry].name) {
                this[entry].placed = true;
            }
        }
    }

    pick(ship)   {
        this.currentShip = ship;
    };
};

class CreatePlayer {
    constructor(pName, pMark) {
            this.pName = pName;
            this.pMark = pMark;
            this.pBoard = new Game();
            this.ready = false;
    };
};

class Play {
    constructor (p1Name, p2Name) {
        this.p1 = new CreatePlayer(p1Name, "P1");
        this.p2 = new CreatePlayer(p2Name, "P2");
        this.current = this.p1;
    }

    checkReady() {
        for(const entry in this.p1.pBoard) {
            if(this.p1.pBoard[entry].name) {
                if(!(this.p1.pBoard[entry].placed === true)) {
                    return
                } else {
                    this.p1.ready = true;
                }
            }
        };
        
        for(const entry in this.p2.pBoard) {
            if(this.p2.pBoard[entry].name) {
                if(!(this.p2.pBoard[entry].placed === true)) {
                    return
                } else {
                    this.p2.ready = true;
                }
            }
        };
    };

    switch() {
        if(this.p1.ready === true) {
            this.current === this.p1 ? this.current = this.p2 : this.current = this.p1;
        } else {
            return `${this.p1.pName} still has ships that need to be placed`;
        }
    };
};

export { Ship, Game, CreatePlayer, Play};