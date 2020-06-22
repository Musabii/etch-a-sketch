const container = document.getElementById("container");

function createDiv(numberOfGrids){
    let num = numberOfGrids * numberOfGrids;
    container.setAttribute("style", `grid-template-columns: repeat(${numberOfGrids}, auto);`);
    for(let i = 0; i <= num; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "container-grid");
        container.appendChild(div);
        console.log(i);
    }
}

createDiv(16);