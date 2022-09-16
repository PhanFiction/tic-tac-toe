const gridContainer = document.querySelector(".grid");
document.querySelector('#x').addEventListener('click', setPlayer);
document.querySelector('#o').addEventListener('click', setPlayer);
let player = document.querySelector('.active').id;
let playerTurn = true;
let filledSlots = [];


/*
1. Check if game is won
2. Implement AI with minmax algorithm
*/

function createBoard() {
  for(let i = 0; i < 3*3; i++){
    let cell = document.createElement('div');
    cell.addEventListener('click', markScreen)
    cell.id = `${i}`;
    gridContainer.appendChild(cell).className = `grid-item center`;
  }
}

function markScreen(event) {
  const gridItem = document.getElementById(event.target.id);
  if(!filledSlots.includes(event.target.id)){
    player === 'x' ? gridItem.textContent = 'X' : gridItem.textContent = 'O';
    filledSlots.push(event.target.id);
  }
}


function setPlayer(event){
  const pChoice = event.target.id;
  const playerX = document.querySelector('#x');
  const playerO = document.querySelector('#o');

  if(pChoice == 'x'){
    playerX.className = 'player-choice active';
    playerO.className = 'player-choice';
  }else{
    playerX.className = 'player-choice';
    playerO.className = 'player-choice active';
  }
  player = pChoice;
}

function resetGame(){
  document.querySelectorAll('.grid-item').forEach(item => item.textContent = '');
  filledSlots = [];
}


createBoard();