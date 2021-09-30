document.addEventListener("DOMContentLoaded", () => {
  // elementos do square
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  let playerName = ''


  if (handleMove(position)) {
      // a mensagem vai aparecer 10ms depois da ultima jogada, assim o ultimo objeto adicionado aparece na tela, se não colocar o timeout a msg aparece mas o objeto não
      if(playerTime == 0){
         playerName = "escudo" 
      } else {
          playerName = "espada"
      }
    setTimeout(() => {
      alert("O jogo acabou! \n O vencedor foi " + playerName);
    }, 10);
  }
  updateSquare(position);
//   updateSquares();
}

// atualiza apenas o quadrado 
function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
   
}

// atualiza 

function updateSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}
