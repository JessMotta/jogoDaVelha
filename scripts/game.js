// iniciar minhas variáveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let drawGame = false;


let symbols = ["o", "x"];

let winStates = [
  // mapeamento de possibilidades de vencer na horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // mapeamento de possibilidade de vencer na vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //  mapeamento de possibilidade de vencer na diagonal
  [0, 4, 8],
  [2, 4, 6],
];

let countTurn0 = 0;
let countTurn1 = 0;

function handleMove(position) {
  if (gameOver) {
    return;
  }
  // a posição do board irá receber o simbolo do jogador da vez
  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    // a mesma coisa que gameOver == false
    if (!gameOver) {
      playerTime = playerTime == 0 ? 1 : 0;
      if (playerTime == 0) {
        countTurn0++;
      } else {
        countTurn1++;
      }
      // irá trocar a vez entre os players
      //   if (playerTime == 0) {
      //     playerTime = 1;
      //   } else {
      //     playerTime = 0;
      //   }
    }
    return gameOver;
  }
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    // aqui vai identificar o primeiro index de cada array, no primeiro é o 0, no segundo é 1
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2]; /* 
    let pos4 = seq[3];
    let pos5 = seq[4];
    let pos6 = seq[5];
    let pos7 = seq[6];
    let pos8 = seq[7];
    let pos9 = seq[8]; */

    // faz a checagem se as posições são iguais excluindo a posição vazia do início do jogo
    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    // } else if((countTurn0 >= 5 || countTurn1 >= 5) && !gameOver){
    //   console.log("funcionou!!!")
    //   setTimeout(() => {
    //     alert("O jogo empatou!");
    //   }, 20);
    }
  }

  return false;
}




function restartGame() {
  // reiniciar as variáveis
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  updateSquares();
}
