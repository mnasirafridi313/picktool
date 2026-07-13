let playerScore = 0;
let botScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const botChoice = choices[Math.floor(Math.random() * 3)];
    
    const resultMessage = document.getElementById('result-message');
    
    // Map choices to emojis for the result text
    const emojiMap = {
        'rock': '🪨',
        'paper': '📄',
        'scissors': '✂️'
    };

    if (playerChoice === botChoice) {
        resultMessage.innerText = `Draw! You both chose ${emojiMap[playerChoice]}`;
        resultMessage.style.color = "#e67e22"; // Orange
    } else if (
        (playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'paper' && botChoice === 'rock') ||
        (playerChoice === 'scissors' && botChoice === 'paper')
    ) {
        playerScore++;
        document.getElementById('player-score').innerText = playerScore;
        resultMessage.innerText = `You Win! ${emojiMap[playerChoice]} beats ${emojiMap[botChoice]}`;
        resultMessage.style.color = "#27ae60"; // Green
    } else {
        botScore++;
        document.getElementById('bot-score').innerText = botScore;
        resultMessage.innerText = `You Lose! ${emojiMap[botChoice]} beats ${emojiMap[playerChoice]}`;
        resultMessage.style.color = "#e74c3c"; // Red
    }
}

function resetScore() {
    playerScore = 0;
    botScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('bot-score').innerText = botScore;
    
    const resultMessage = document.getElementById('result-message');
    resultMessage.innerText = "Choose your weapon!";
    resultMessage.style.color = "#3b5998";
}
