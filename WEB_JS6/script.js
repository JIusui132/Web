const boardSize = 5;
let board = [];
let cells = [];
let startTime;
let steps = 0;

// Initialize the board
function initBoard() {
    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = Math.random() < 0.5 ? 1 : 0; // Randomly set initial state
        }
    }
}

// Render the board
function renderBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = ''; // Clear previous cells

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            if (board[i][j] === 1) {
                cell.classList.add('on');
            }
            cell.addEventListener('click', toggleCell);
            gameBoard.appendChild(cell);
            cells.push(cell);
        }
    }
}

// Toggle the state of a cell and its neighbors
function toggleCell() {
    const row = parseInt(this.dataset.row);
    const col = parseInt(this.dataset.col);
    toggleState(row, col);
    toggleState(row - 1, col);
    toggleState(row + 1, col);
    toggleState(row, col - 1);
    toggleState(row, col + 1);
    steps++;
    document.getElementById('steps').innerText = `Steps: ${steps}`;
    checkWin();
    renderBoard();
}

// Toggle the state of a cell
function toggleState(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        board[row][col] = 1 - board[row][col];
    }
}

// Check if all cells are off
function checkWin() {
    const isWin = board.every(row => row.every(cell => cell === 0));
    if (isWin) {
        const endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000;
        alert(`Congratulations! You won in ${elapsedTime.toFixed(1)} seconds with ${steps} steps!`);
        initGame();
    }
}

// Update the timer every second
function updateTimer() {
    const currentTime = new Date();
    const elapsedTime = (currentTime - startTime) / 1000;
    document.getElementById('timer').innerText = `Time: ${elapsedTime.toFixed(1)} seconds`;
}

// Initialize the game
function initGame() {
    initBoard();
    renderBoard();
    startTime = new Date();
    steps = 0;
    document.getElementById('steps').innerText = `Steps: ${steps}`;
    setInterval(updateTimer, 1000); // Update the timer every second
}

// Start the game when the "New Game" button is clicked
document.getElementById('newGameBtn').addEventListener('click', initGame);

// Start the game
initGame();
