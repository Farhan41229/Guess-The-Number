'use strict';

// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!...🎉';
// // console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number').textContent);
// // document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 33;

////////////////////////////////

// Event listeners

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     if (guess) (console.log(guess, typeof guess));
//     if(!guess){
//         document.querySelector('.message').textContent = '⛔ No number ';
//         // alert('Please enter a valid guess');
//     }

// })

////////////////////////////////

// Challenge 1

let secretnumber = Math.floor(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretnumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number ';
    // alert('Please enter a valid guess');
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess>secretnumber ? 'Number Too High' : 'Number Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  //   else if (guess > secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretnumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

////////////////////////////////

//

///////////////////////////////
