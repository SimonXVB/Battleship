import { Ship, Gameboard, Game, CreatePlayer, Play } from "./index.js";

const shipGrid = document.getElementById("ship-grid");
const p1Input = document.getElementById("p1-input");
const p2Input = document.getElementById("p2-input");
const start = document.getElementById("start-btn");
const grid = document.getElementById("grid");

let game = new Play("test", "test");
let curr = "placeholder";

function startGame () {
    if(p1Input.value === "" || p2Input.value === "") {
        alert("Enter name");
        return;
    }
    
    start.disabled = true;
    p1Input.disabled = true;
    p2Input.disabled = true;

    renderShips();
    renderGrid();
};

function add(ship) {
    curr = ship;
}

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

            const pickBtn = document.createElement("button");
            pickBtn.innerHTML = "Pick";
            pickBtn.addEventListener("click", add("test"));  /*<-- Line of code in question*/
            top.appendChild(pickBtn);
        }
        
        if(count === 15) {
            return
        }
    };
};

function renderGrid() {
    let ver = 0;
    let hor = -1;
    
    for(let i = 0; i < 100; i++) {
        hor++
        
        if(hor === 10) {
            hor = 0;
            ver++;
        }
        
        grid.innerHTML += `<div id="${hor}-${ver}">x</div>`
    }
}


start.addEventListener("click", startGame);
console.log(curr);