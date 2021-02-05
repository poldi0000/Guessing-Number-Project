'use strict';

const secretNumb = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumb;

let score = 20;
let highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) document.querySelector('.message').textContent = 'No number';
  else if (guess === secretNumb) {
    document.querySelector('.message').textContent = 'You guessed right';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.backgroundColor = 'green';
  } else if (guess > secretNumb) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumb) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  if (score <= 0) {
    document.querySelector('.message').textContent = 'You lose';
    document.querySelector('.number').style.backgroundColor = 'red';
  }
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
});
