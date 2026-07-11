const levels = [
    { seq: "2, 4, 8, 16", answer: 32 },
    { seq: "1, 3, 6, 10", answer: 15 },
    { seq: "100, 90, 80, 70", answer: 60 },
    { seq: "5, 10, 20, 40", answer: 80 },
    { seq: "3, 6, 9, 12", answer: 15 },
    { seq: "1, 4, 9, 16", answer: 25 },
    { seq: "2, 3, 5, 8", answer: 13 },
    { seq: "80, 75, 70, 65", answer: 60 },
    { seq: "1, 2, 4, 8", answer: 16 },
    { seq: "10, 20, 30, 40", answer: 50 },
    { seq: "2, 5, 10, 17", answer: 26 },
    { seq: "7, 14, 21, 28", answer: 35 },
    { seq: "1, 8, 27, 64", answer: 125 },
    { seq: "50, 48, 46, 44", answer: 42 },
    { seq: "3, 9, 27, 81", answer: 243 },
    { seq: "4, 8, 12, 16", answer: 20 },
    { seq: "1, 5, 25, 125", answer: 625 },
    { seq: "10, 15, 20, 25", answer: 30 },
    { seq: "2, 6, 12, 20", answer: 30 },
    { seq: "1, 3, 9, 27", answer: 81 }
];

let currentLevel = 0;

function loadLevel() {
    if (currentLevel < levels.length) {
        document.getElementById("level-num").innerText = currentLevel + 1;
        document.getElementById("sequence-display").innerText = levels[currentLevel].seq + ", ?";
    } else {
        document.getElementById("result").innerText = "Congratulations! You completed all levels.";
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("user-input").value);
    if (userAnswer === levels[currentLevel].answer) {
        document.getElementById("result").innerText = "Correct!";
        document.getElementById("user-input").value = "";
        currentLevel++;
        loadLevel();
    } else {
        document.getElementById("result").innerText = "Wrong, try again!";
    }
}

loadLevel();
  
