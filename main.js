const container = document.querySelector(".container");

let board = new Array(9).fill("empty");
const validPlays = ["X", "O"];
let gameOver = false;
let winningPlay = "";
let activePlay = validPlays[0];

window.onload = initializeGame;

function restartGame() {
  board = new Array(9).fill("empty");
  gameOver = false;
  activePlay = validPlays[0];
  winningPlay = "";
  document.querySelector(".gameover-container").remove();
  document.querySelector(".game-table").remove();
  initializeGame();
}

function initializeGame() {
  // document.querySelector(".game-table").remove();

  const gameTable = document.createElement("table");
  gameTable.className = "game-table";
  for (let j = 0; j < 3; j++) {
    const gameRow = document.createElement("tr");
    gameRow.className = "game-row";
    for (let i = 0; i < 3; i++) {
      const gameCell = document.createElement("td");
      gameCell.className = "game-cell";
      gameCell.id = i + j * 3;
      gameRow.appendChild(gameCell);
    }
    gameTable.appendChild(gameRow);
  }
  container.appendChild(gameTable);
  const gameCells = document.querySelectorAll(".game-cell");
  gameCells.forEach((cell) =>
    cell.addEventListener("click", () => {
      if (cell.textContent === "") {
        cell.textContent = activePlay;
        board[cell.id] = activePlay;
        checkForWin();
        if (gameOver) {
          const gameOverContainer = document.createElement("div");
          gameOverContainer.className = "gameover-container";
          const gameOverMessage = document.createElement("h1");
          gameOverMessage.className = "gameover-message";
          gameOverMessage.textContent = `Game Over ${winningPlay} wins!`;
          const restartButton = document.createElement("button");
          restartButton.textContent = "Restart";
          restartButton.className = "restart-button";
          restartButton.onclick = restartGame;
          gameOverContainer.appendChild(gameOverMessage);
          gameOverContainer.appendChild(restartButton);
          container.insertAdjacentElement("afterbegin", gameOverContainer);
        }
        activePlay = validPlays.find((p) => p !== activePlay);
      }
    })
  );
}

function checkForWin() {
  if (board[0] === board[1] && board[0] === board[2] && board[0] !== "empty") {
    gameOver = true;
    winningPlay = board[0];
  } else if (
    board[3] === board[4] &&
    board[3] === board[5] &&
    board[3] !== "empty"
  ) {
    gameOver = true;
    winningPlay = board[3];
  } else if (
    board[6] === board[7] &&
    board[6] === board[8] &&
    board[6] !== "empty"
  ) {
    gameOver = true;
    winningPlay = board[6];
  } else if (
    board[0] === board[3] &&
    board[0] === board[6] &&
    board[0] !== "empty"
  ) {
    gameOver = true;
    winningPlay = board[0];
  } else if (
    board[1] === board[4] &&
    board[1] === board[7] &&
    board[1] !== "empty"
  ) {
    gameOver = true;
    winningPlay = board[1];
  } else if (
    board[2] === board[5] &&
    board[2] === board[8] &&
    board[2] !== "empty"
  ) {
    gameOver = true;
    winningPlay = board[2];
  } else if (
    board[0] === board[4] &&
    board[0] === board[8] &&
    board[0] !== "empty"
  ) {
    gameOver = true;
    winningPlay = board[0];
  } else if (
    board[2] === board[4] &&
    board[2] === board[6] &&
    board[2] !== "empty"
  ) {
    gameOver = true;
    winningPlay = board[2];
  }
}
