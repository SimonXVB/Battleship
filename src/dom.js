import { Ship, Gameboard, Game, CreatePlayer, Play } from "./index.js";

const shipGrid = document.getElementById("ship-grid");
const p1Input = document.getElementById("p1-input");
const p2Input = document.getElementById("p2-input");
const start = document.getElementById("start-btn");
const grid = document.getElementById("grid");
const wrapper = document.getElementById("wrapper");

let game;

function startGame () {
    if(p1Input.value === "" || p2Input.value === "") {
        alert("Enter name");
        return;
    }

    game = new Play(p1Input.value, p2Input.value)
    
    start.disabled = true;
    p1Input.disabled = true;
    p2Input.disabled = true;
    
    updateUIPre();
};

function renderShips() {
    let count = 0;
    for(const entry in game.current.pBoard) {
        
        if(game.current.pBoard[entry].name) {
            count++;
            
            const top = document.createElement("div");
            top.classList.add("square");
            shipGrid.appendChild(top);
            
            const name = document.createElement("div");
            name.innerHTML = `Ship: ${game.current.pBoard[entry].name}`;
            top.appendChild(name);
            
            const length = document.createElement("div");
            length.innerHTML = `Length: ${game.current.pBoard[entry].length}`;
            top.appendChild(length);
            
            const placed = document.createElement("div");
            placed.classList.add("place");
            placed.innerHTML = `Placed?: ${game.current.pBoard[entry].placed}`;
            top.appendChild(placed);

            const pickBtn = document.createElement("button");
            pickBtn.classList.add("button");
            pickBtn.innerHTML = "Pick";
            pickBtn.addEventListener("click", () => { 
                                                        game.current.pBoard.pick(game.current.pBoard[entry]);
                                                        updateUIPre();
                                                    });
            top.appendChild(pickBtn);

        }
        
        if(count === 15) {
            return
        }
    };
};

function renderControls() {
    const currentPick = document.createElement("p");
    currentPick.id = "current-ship";
    currentPick.innerHTML = `Current ship: ${game.current.pBoard.currentShip.name}`;
    shipGrid.appendChild(currentPick);

    const currentPlayer = document.createElement("p");
    currentPlayer.id = "current-player";
    currentPlayer.innerHTML = `Current player board: ${game.current.pName}`;
    shipGrid.appendChild(currentPlayer);

    const placeHor = document.createElement("button");
    placeHor.innerHTML = "Place horizontally";
    placeHor.addEventListener("click", () => setDirection("horizontal"));
    shipGrid.appendChild(placeHor);

    const placeVer = document.createElement("button");
    placeVer.innerHTML = "Place vertically";
    placeVer.addEventListener("click", () => setDirection("vertical"));
    shipGrid.appendChild(placeVer);
}

function renderGrid() {
    let ver = 0;
    let hor = -1;
    
    for(let i = 0; i < 100; i++) {
        hor++
        
        if(hor === 10) {
            hor = 0;
            ver++;
        }
        
        const squareGrid = document.createElement("div");
        squareGrid.id = `${ver}-${hor}`;
        squareGrid.addEventListener("mouseenter", gridHoverIn.bind(null, hor, ver));
        squareGrid.addEventListener("mouseleave", gridHoverOut.bind(null, hor, ver));
        squareGrid.addEventListener("click", place.bind(null, hor, ver));
        squareGrid.classList.add("grid-square");
        grid.appendChild(squareGrid);
    }
};

function updateUIPre() {
    shipGrid.innerHTML = "";
    grid.innerHTML = "";
    renderShips();
    renderControls();
    renderGrid();

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++)
            if(game.current.pBoard.board[i][j] !== 0) {
                const square = document.getElementById(`${i}-${j}`);
                square.style.backgroundColor = "white";
            }
    }

    if(game.p1.ready === true && game.p2.ready === true) {
        updateUIPost();
    }
};

function updateUIPost() {
    shipGrid.innerHTML = "";
    grid.innerHTML = "";
    renderShips();
    renderControlsHit();
    renderHitGrid();
};

function renderHitGrid() {
    let ver = 0;
    let hor = -1;
    
    for(let i = 0; i < 100; i++) {
        hor++
        
        if(hor === 10) {
            hor = 0;
            ver++;
        }
        
        const squareGrid = document.createElement("div");
        squareGrid.id = `${ver}-${hor}`;
        squareGrid.addEventListener("click", hit.bind(null, hor, ver));
        squareGrid.classList.add("grid-square");
        grid.appendChild(squareGrid);
    };

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            if(game.current.pBoard.board[i][j] === "H") {
                const square = document.getElementById(`${i}-${j}`);
                let color = "blue";
                if(game.current.pMark === "P1") {
                    color = "blue";
                } else {
                    color = "red"
                }
                square.style.backgroundColor = color;
            }
        }
    }

    const shipGrid = document.querySelectorAll(".button");
    shipGrid.forEach((ship) => {
        ship.parentNode.removeChild(ship);
    });
};

function renderControlsHit() {
    const currentPlayer = document.createElement("p");
    currentPlayer.id = "current-player";
    currentPlayer.innerHTML = `Current player: ${game.current.pName}`;
    shipGrid.appendChild(currentPlayer);

    const switchPlayer = document.createElement("button");
    switchPlayer.id = "switch";
    switchPlayer.innerHTML = `Switch`;
    switchPlayer.addEventListener("click", () => { game.switch(); updateUIPost(); });
    shipGrid.appendChild(switchPlayer);
}

function hit(hor, ver) {
    game.current.pBoard.hit(hor, ver);

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            document.getElementById(`${i}-${j}`).style.pointerEvents = "none";
            if(game.current.pBoard.board[i][j] === "H") {
                const square = document.getElementById(`${i}-${j}`);
                let color = "blue";
                if(game.current.pMark === "P1") {
                    color = "blue";
                } else {
                    color = "red"
                }
                square.style.backgroundColor = color;
            }
        }
    }
    checkWin();
};

function setDirection(direction) {
    game.current.pBoard.direction = direction;
};

function place(hor, ver) {
    if(game.current.pBoard.direction = "vertical") {
        game.current.pBoard.placeVer(game.current.pBoard.currentShip, hor, ver);
    } else {
        game.current.pBoard.placeVer(game.current.pBoard.currentShip, hor, ver);
    };

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++)
            if(game.current.pBoard.board[i][j] !== 0) {
                const square = document.getElementById(`${i}-${j}`);
                square.style.backgroundColor = "white";
            }
    };

    game.changePlayer();
    updateUIPre();
};

function gridHoverIn(hor, ver) {
    for(let i = 0; i < game.current.pBoard.currentShip.length; i++) {
        if(game.current.pBoard.direction === "vertical") {
            let currentSquare = document.getElementById(`${ver + i}-${hor}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "black";
            }
        } else {
            let currentSquare = document.getElementById(`${ver}-${hor + i}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "black";
            }
        }
    };
};

function gridHoverOut(hor, ver) {
    for(let i = 0; i < game.current.pBoard.currentShip.length; i++) {
        if(game.current.pBoard.direction === "vertical") {
            let currentSquare = document.getElementById(`${ver + i}-${hor}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "#fff49b";
            }
        } else {
            let currentSquare = document.getElementById(`${ver}-${hor + i}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "#fff49b";
            }
        }
    }
};

function checkWin() {
    if(game.p1.pBoard.winner === true) {
        wrapper.innerHTML = `${game.p2.pName} has won!`;
    }

    if(game.p2.pBoard.winner === true) {
        wrapper.innerHTML = `${game.p1.pName} has won!`;
    }
}

start.addEventListener("click", startGame);