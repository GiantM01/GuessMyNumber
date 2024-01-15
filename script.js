'use strict';

// console.log(document.querySelector('.message').textContent);

// // DOM document object model

// // Structured representation of  html documents. Allows JS to access HTML elements and styles to manipulate them.

// // change text, HTML, attributes, and even CSS styles

// // DOM! == Javascript

// // DOM == WEB API
// document.querySelector('.message').textContent = 'Correct Number!';

// // console.log(
// //   (document.querySelector('.message').textContent = 'Correct Number!')
// // );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// // to input a value we use .value
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// DRY principle Don't reapeat yourself
// we are going to use the event listener

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    // CSS manipulation
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // current score
    document.querySelector('.currentscore').textContent = score;
  } else if (guess !== highscore) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? ' 📈 Too High!' : ' 📉 Too low!';
      displayMessage(guess > secretNumber ? ' 📈 Too High!' : ' 📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when player guesses larger number
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' 📈 Too High!';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' 💥 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when player guesses smaller number
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' 📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' 💥 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // CSS manipulation
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.currentscore').textContent = 0;

  // CSS manipulation
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
