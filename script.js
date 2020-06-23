const container = document.getElementById("container");
const sizeBtn = document.getElementById("setGrid");
const colorBtn = document.getElementById("setColor");
const randomColorBtn = document.getElementById("setRandomColor");
let clicked = false;
let color = "#000";

function setColor(){
    if(clicked) this.setAttribute("style", `background-color: ${color};`);
}

function createGrids(numberOfGrids){
    container.innerHTML = "";
    let num = numberOfGrids * numberOfGrids;
    container.setAttribute("style", `grid-template-columns: repeat(${numberOfGrids}, auto);`);
    for(let i = 1; i <= num; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "container-grid");
        div.addEventListener("mouseover", setColor);
        container.appendChild(div);
        console.log(i);
    }
}

function setClickedTrue() {
    clicked = true;
}

function setClickedFalse() {
    clicked = false;
}

function getGridAmount() {
    let gridSize = prompt("Please enter number of the grids per side. (default is 16, numbers above 100 might cause lag.)");
    if (gridSize === null) {
        return;
    } else {
        createGrids(gridSize);
    }
}

function getColor() {
    color = prompt("please enter a color hex code. like: #000000 (click on cancel for white color)", "#000000");
}

function getRandomColor() {
    color = "#" + Math.floor(Math.random()*16777215).toString(16);;
}

sizeBtn.addEventListener("click", getGridAmount);
colorBtn.addEventListener("click", getColor);
randomColorBtn.addEventListener("click", getRandomColor);
container.addEventListener("mousedown", setClickedTrue);
window.addEventListener("mouseup", setClickedFalse);
createGrids(16);