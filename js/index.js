const gridContainer = document.querySelector(".grid");
document.querySelector('#x').addEventListener('click', setPlayer);
document.querySelector('#o').addEventListener('click', setPlayer);
let player = document.querySelector('.active').id;
let playerTurn = true;


// need player to choose which role. X or O

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
  let newText = document.createElement('p');
  gridItem.textContent = 'X';
  //gridItem.appendChild(newText);
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
  document.querySelectorAll('.grid-item').forEach(item => {
    item.textContent = '';
  })
}


createBoard();