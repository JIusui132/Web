document.addEventListener("DOMContentLoaded", function() {
    const square = document.getElementById("square");
    const startBtn = document.getElementById("start-btn");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("timer");
    let score = 0;
    let timer;
    let color;

    startBtn.addEventListener("click", startGame);

    function startGame() {
        const difficulty = document.getElementById("difficulty").value;
        color = document.getElementById("color").value;
        score = 0;
        scoreDisplay.textContent = score;
        moveSquare();
        timer = setInterval(moveSquare, getInterval(difficulty));
    }

    function moveSquare() {
        const squareSize = 100; // Size of the square
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const maxX = windowWidth - squareSize;
        const maxY = windowHeight - squareSize;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        square.style.backgroundColor = color;
        square.style.left = newX + "90px";
        square.style.top = newY + "90px";

        square.onclick = function() {
            score++;
            scoreDisplay.textContent = score;
            moveSquare(); // Move square after click
        };

        setTimeout(function() {
            clearInterval(timer);
            alert("Game Over! Your score is: " + score);
        }, getTimeLimit(difficulty));
    }

    function getInterval(difficulty) {
        switch (difficulty) {
            case "easy":
                return 2000; // 2 seconds
            case "medium":
                return 1500; // 1.5 seconds
            case "hard":
                return 1000; // 1 second
            default:
                return 2000;
        }
    }

    function getTimeLimit(difficulty) {
        switch (difficulty) {
            case "easy":
                return 10000; // 10 seconds
            case "medium":
                return 8000; // 8 seconds
            case "hard":
                return 5000; // 5 seconds
            default:
                return 10000;
        }
    }
});
