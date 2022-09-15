const gridContainer = document.querySelector(".grid");

function createBoard() {
  for(let i = 0; i < 3*3; i++){
    let cell = document.createElement('div');
    gridContainer.appendChild(cell).className = "grid-item";
  }
}


createBoard();