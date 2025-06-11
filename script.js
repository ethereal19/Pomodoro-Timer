let time = 25 * 60;
let timerInterval;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById('timer').textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        alert("Time's up! Take a short break.");
        isRunning = false;
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 25 * 60;
  updateDisplay();
  isRunning = false;
}

// Initialize display
updateDisplay();
