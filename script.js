// Query Selectors
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const socre = document.querySelector('.score');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');

// Game Logic
check.addEventListener('click', function () {
  const value = Number(guess.value);
  if (!value) {
    message.textContent = `⛔ No number provided`;
  }
});


