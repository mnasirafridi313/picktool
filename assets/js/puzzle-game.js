const board = document.getElementById('game-board');
const movesEl = document.getElementById('moves');
const matchesEl = document.getElementById('matches');
const restartBtn = document.getElementById('restart-btn');

// 8 pairs of emojis for a 16-card grid
const emojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🥝', '🍍'];
let cards = [...emojis, ...emojis]; 
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let isProcessing = false; // Prevents clicking too fast

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Build the grid
function createBoard() {
    board.innerHTML = '';
    shuffle(cards);
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    movesEl.innerText = moves;
    matchesEl.innerText = matchedPairs;
    isProcessing = false;

    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

// Logic when a card is clicked
function flipCard() {
    // Stop if we are already checking 2 cards, or if this card is already flipped
    if (isProcessing || this.classList.contains('flipped')) return;

    this.classList.add('flipped');
    this.innerText = this.dataset.emoji;
    flippedCards.push(this);

    // If two cards are flipped, check for a match
    if (flippedCards.length === 2) {
        moves++;
        movesEl.innerText = moves;
        checkMatch();
    }
}

// Check if the two cards match
function checkMatch() {
    isProcessing = true;
    const [card1, card2] = flippedCards;

    if (card1.dataset.emoji === card2.dataset.emoji) {
        // It's a match!
        matchedPairs++;
        matchesEl.innerText = matchedPairs;
        flippedCards = [];
        isProcessing = false;
        
        // Check for win
        if (matchedPairs === 8) {
            setTimeout(() => alert(`You won in ${moves} moves! Great job!`), 300);
        }
    } else {
        // Not a match, hide them after a short delay
        setTimeout(() => {
            card1.classList.remove('flipped');
            card1.innerText = '';
            card2.classList.remove('flipped');
            card2.innerText = '';
            flippedCards = [];
            isProcessing = false;
        }, 800);
    }
}

// Restart button listener
restartBtn.addEventListener('click', createBoard);

// Start game when page loads
createBoard();
                  
