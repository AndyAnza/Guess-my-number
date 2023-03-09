'use strict';
/*
// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = '23';  //------>To change input values we have to use 'value' instead of 'textContent'
console.log(document.querySelector('.guess').value);
*/
//An event is something that happens on the page, it can be a key press, a click, etc. With an event listener we can wait to the event to happen an react to it.

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //*** Whever we get a value from an input it will always going to be a strinng so we used Number() function to change it to value number
  //   console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess < number) {
    if (score <= 1) {
      document.querySelector('.message').textContent = '💥 you lost!';
      document.querySelector('.score').textContent = 0;
      document.body.style.background = 'red';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '👇 Too low!';
    }
    // document.querySelector('.score').textContent =
    //   document.querySelector('.score').textContent - 1; //<--there is a better way to do this by creating a variable and then just ++ ir -- to it.
  } else if (guess > number) {
    if (score <= 1) {
      document.querySelector('.message').textContent = '💥 you lost!';
      document.querySelector('.score').textContent = 0;
      document.body.style.background = 'red';
    } else {
      document.querySelector('.message').textContent = '👆 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // document.querySelector('.score').textContent =
    //   document.querySelector('.score').textContent - 1;
  } else {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = number;
    document.body.style.background = 'green';
    document.querySelector('.number').style.width = '30rem'; //<---The value always needs to be a string when changing style
    // document.querySelector('.highscore').textContent =
    //   document.querySelector('.highscore').textContent + 1;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.body.style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  number;
});
