// Query Selectors
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const socre_slector = document.querySelector('.score');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again_selector = document.querySelector('.again');
const highscore_selector = document.querySelector('.highscore');

// Global Variables
let score = 20;
let random = Math.floor(Math.random() * 20 + 1);
let highscore = 0;

// Game Logic
check.addEventListener('click', function () {
  const value = Number(guess.value);
  if (!value) {
    message.textContent = `⛔ No number provided`;
  } else if (value === random && score != 0) {
    message.textContent = '🎉 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = random;
    highscore = Math.max(highscore, score);
    highscore_selector.textContent = highscore;
  } else if (value < random && score != 0) {
    message.textContent = '📉 Too low';
    score--;
    socre_slector.textContent = score;
  } else if (value > random && score != 0) {
    message.textContent = '📈 Too high';
    score--;
    socre_slector.textContent = score;
  } else {
    message.textContent = '💥 You lost the game';
  }
});

again_selector.addEventListener('click', function () {
  score = 20;
  random = Math.floor(Math.random() * 20 + 1);
  socre_slector.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  guess.value = '';
});
