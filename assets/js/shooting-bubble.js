const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const colors = ['#FF5252', '#4CAF50', '#2196F3', '#FFEB3B'];
let bubbles = [];
let gameActive = false;
let nextColor = colors[Math.floor(Math.random() * colors.length)];
let projectile = { x: 200, y: 360, dx: 0, dy: 0, color: null, active: false };

function createGrid() {
    bubbles = [];
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 8; c++) {
            bubbles.push({ x: c * 50 + 25, y: r * 40 + 20, color: colors[Math.floor(Math.random() * colors.length)], active: true });
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    bubbles.forEach(b => {
        if (!b.active) return;
        ctx.fillStyle = b.color;
        ctx.beginPath(); ctx.arc(b.x, b.y, 18, 0, Math.PI*2); ctx.fill();
    });
    
    // Draw Shooter Base
    ctx.fillStyle = '#333';
    ctx.fillRect(180, 360, 40, 40); 
    
    // Draw Preview Bubble (if not active)
    if (!projectile.active) {
        ctx.fillStyle = nextColor;
        ctx.beginPath(); ctx.arc(200, 360, 18, 0, Math.PI*2); ctx.fill();
    }
    
    // Draw Projectile
    if (projectile.active) {
        projectile.x += projectile.dx;
        projectile.y += projectile.dy;
        ctx.fillStyle = projectile.color;
        ctx.beginPath(); ctx.arc(projectile.x, projectile.y, 18, 0, Math.PI*2); ctx.fill();
        
        if (projectile.x < 18 || projectile.x > 382) projectile.dx *= -1;
        
        // Collision
        bubbles.forEach((b, i) => {
            if (b.active && Math.hypot(projectile.x - b.x, projectile.y - b.y) < 36) {
                if (projectile.color === b.color) {
                    // Logic: Match 3 or more pops, else adds to grid
                    b.active = false; // Simple Pop for now
                } else {
                    // Add penalty
                    bubbles.push({ x: projectile.x, y: projectile.y - 40, color: projectile.color, active: true });
                }
                projectile.active = false;
                projectile.x = 200; projectile.y = 360;
            }
        });
        if (projectile.y < 0) { projectile.active = false; projectile.x = 200; projectile.y = 360; }
    }
    if (gameActive) requestAnimationFrame(draw);
}

function startGame(seconds) {
    createGrid();
    gameActive = true;
    let timeLeft = seconds;
    const timerDisplay = document.getElementById('timer');
    clearInterval(window.timer);
    window.timer = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        timerDisplay.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (timeLeft <= 0) { clearInterval(window.timer); gameActive = false; alert("Time's up!"); }
    }, 1000);
    draw();
}

canvas.addEventListener('click', (e) => {
    if (!gameActive || projectile.active) return;
    const rect = canvas.getBoundingClientRect();
    const angle = Math.atan2((e.clientY - rect.top) - 360, (e.clientX - rect.left) - 200);
    
    projectile.color = nextColor;
    projectile.dx = Math.cos(angle) * 8;
    projectile.dy = Math.sin(angle) * 8;
    projectile.active = true;
    
    // Refresh next color
    nextColor = colors[Math.floor(Math.random() * colors.length)];
});

// Initial state
createGrid();
draw();
                        
