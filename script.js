const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");
const difficultySelect = document.getElementById("difficulty");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // Human
let gameActive = true;

const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener("click", cellClicked));
restartBtn.addEventListener("click", restartGame);

function cellClicked() {
  const index = this.getAttribute("data-index");

  if (board[index] !== "" || !gameActive || currentPlayer !== "X") return;

  board[index] = "X";
  this.textContent = "X";
  this.classList.add("filled", "user-move");   // ✅ Prevent hover after move

  if (checkWinner(board, "X")) {
    statusText.textContent = "You win! 🎉";
    statusText.style.color = "green";
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    statusText.textContent = "It's a draw!";
    statusText.style.color="white";
    gameActive = false;
    return;
  }

  currentPlayer = "O";
  updateTurnDisplay();
  statusText.textContent = "AI's turn (O)";
  statusText.style.color="red";
  setTimeout(aiMove, 500); // slight delay for realism
}

function aiMove() {
  if (!gameActive) return;

  let difficulty = difficultySelect.value;
  let move;

  if (difficulty === "easy") {
    move = randomMove();
  } else if (difficulty === "medium") {
    move = Math.random() < 0.5 ? randomMove() : bestMove();
  } else {
    move = bestMove();
  }

  board[move] = "O";
  cells[move].textContent = "O";
  cells[move].classList.add("filled", "ai-move");   // ✅ Prevent hover after AI move

  if (checkWinner(board, "O")) {
    statusText.textContent = "AI wins! 🤖";
    statusText.style.color = "red";
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = "X";
  updateTurnDisplay();
  statusText.textContent = "Your turn (X)";
  statusText.style.color="green";
}

function randomMove() {
  let available = board.map((v, i) => v === "" ? i : null).filter(v => v !== null);
  return available[Math.floor(Math.random() * available.length)];
}

function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "O";
      let score = minimax(board, 0, false, -Infinity, Infinity);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

function minimax(newBoard, depth, isMax, alpha, beta) {
  if (checkWinner(newBoard, "O")) return 10 - depth;
  if (checkWinner(newBoard, "X")) return depth - 10;
  if (newBoard.every(cell => cell !== "")) return 0;

  if (isMax) {
    let maxEval = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "O";
        let evalScore = minimax(newBoard, depth + 1, false, alpha, beta);
        newBoard[i] = "";
        maxEval = Math.max(maxEval, evalScore);
        alpha = Math.max(alpha, evalScore);
        if (beta <= alpha) break;
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "X";
        let evalScore = minimax(newBoard, depth + 1, true, alpha, beta);
        newBoard[i] = "";
        minEval = Math.min(minEval, evalScore);
        beta = Math.min(beta, evalScore);
        if (beta <= alpha) break;
      }
    }
    return minEval;
  }
}

function checkWinner(board, player) {
  for (let condition of winConditions) {
    if (condition.every(index => board[index] === player)) {
      condition.forEach(i => cells[i].classList.add("win"));
      return true;
    }
  }
  return false;
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Your turn (X)";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("win");
    cell.classList.remove("win", "filled", "user-move", "ai-move");   // ✅ Reset filled
  });
  updateTurnDisplay();
}

function updateTurnDisplay() {
  const status = document.getElementById("status");
  const boardElement = document.querySelector(".board");

  if (currentPlayer === "X") {
    status.textContent = "Your turn (X)";
    boardElement.classList.add("user-turn");
    boardElement.classList.remove("ai-turn");
  } else {
    status.textContent = "AI's turn (O)";
    boardElement.classList.add("ai-turn");
    boardElement.classList.remove("user-turn");
  }
}

function nextTurn() {
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
  updateTurnDisplay();
}
