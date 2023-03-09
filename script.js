'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);
const displayNumber = number =>
  (document.querySelector('.number').textContent = number);
const backgroundColor = color => (document.body.style.background = color);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess !== number) {
    if (score <= 1) {
      displayMessage('💥 you lost!');
      displayScore(0);
      backgroundColor('red');
    } else {
      score--;
      displayScore(score);
      displayMessage(guess < number ? '👇 Too low!' : '👆 Too high!');
    }
  } else {
    displayMessage('🎉 Correct Number!');
    displayNumber(number);
    backgroundColor('green');
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayScore(score);
  backgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
  number;
});
