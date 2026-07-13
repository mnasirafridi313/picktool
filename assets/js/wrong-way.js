/* PART 1 OF 5 - STATE & SETUP */

const GRID_SIZE = 17; // 9 cells + 8 walls
let board = document.getElementById('game-board');
let statusMsg = document.getElementById('status-msg');

let playerRed = { id: 'red', r: 16, c: 8, walls: 10, goalRow: 0 };
let playerBlue = { id: 'blue', r: 0, c: 8, walls: 10, goalRow: 16 };
let currentPlayer = playerRed;
let currentAction = 'move'; // can be 'move', 'wall-h', 'wall-v'

// Keep track of placed walls to prevent overlapping
let placedWalls = new Set();

// Initialize the visual grid
function createBoard() {
    board.innerHTML = '';
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            let div = document.createElement('div');
            div.dataset.r = r;
            div.dataset.c = c;
            div.id = `cell-${r}-${c}`;

            if (r % 2 === 0 && c % 2 === 0) {
                // This is a playable cell
                div.className = 'cell';
                div.onclick = () => handleCellClick(r, c);
            } else if (r % 2 !== 0 && c % 2 === 0) {
                // Horizontal wall slot
                div.className = 'wall-slot';
                div.onclick = () => handleWallClick(r, c, 'h');
            } else if (r % 2 === 0 && c % 2 !== 0) {
                // Vertical wall slot
                div.className = 'wall-slot';
                div.onclick = () => handleWallClick(r, c, 'v');
            } else {
                // Intersection between four cells (cannot be clicked directly)
                div.className = 'intersection';
            }
            board.appendChild(div);
        }
    }
    renderPlayers();
}

function renderPlayers() {
    // Clear old positions
    document.querySelectorAll('.player').forEach(el => el.remove());
    
    // Draw Red
    let redCell = document.getElementById(`cell-${playerRed.r}-${playerRed.c}`);
    let redDiv = document.createElement('div');
    redDiv.className = 'player player-red';
    redCell.appendChild(redDiv);

    // Draw Blue
    let blueCell = document.getElementById(`cell-${playerBlue.r}-${playerBlue.c}`);
    let blueDiv = document.createElement('div');
    blueDiv.className = 'player player-blue';
    blueCell.appendChild(blueDiv);
}

// Set up UI buttons
function setAction(action) {
    currentAction = action;
    document.querySelectorAll('.control-btn').forEach(btn => btn.classList.remove('active'));
    
    if(action === 'move') document.getElementById('btn-move').classList.add('active');
    if(action === 'wall-h') document.getElementById('btn-wall-h').classList.add('active');
    if(action === 'wall-v') document.getElementById('btn-wall-v').classList.add('active');
}

// Start Game
createBoard();
              
