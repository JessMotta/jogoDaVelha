document.addEventListener("DOMContentLoaded", () => {
  // elementos do square
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  // verifica o nome dos jogadores
  let player1 = document.getElementById("player1");
  let player2 = document.getElementById("player2");
  let player1Name = player1.value;
  let player2Name = player2.value;

  let square = event.target;
  let position = square.id;

  let playerName = "";

  if (handleMove(position)) {
    // a mensagem vai aparecer 10ms depois da ultima jogada, assim o ultimo objeto adicionado aparece na tela, se não colocar o timeout a msg aparece mas o objeto não
    if (playerTime == 0) {
      playerName = player1Name;
    } else {
      playerName = player2Name;
    }
    setTimeout(() => {
      alert("O jogo acabou! \n O vencedor foi " + playerName);
    }, 20);
  } else if (drawGame) {
    alert("O jogo empatou! Tentem novamente!");
  }
  updateSquare(position);
}

// atualiza apenas o quadrado
function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol == "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
  alert("Jogo reiniciado");
}
