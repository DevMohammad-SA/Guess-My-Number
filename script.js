'use strict';
/*const test = document.querySelector('.message');
console.log(test);
console.log(test.textContent);
const input = prompt('enter any word mr Developer ! :)');
test.textContent = input;
*/

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = '';
console.log(number);
const checkBtn = document.querySelector('.check');
var titleElement = document.getElementById('myTitle');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//const message = document.querySelector('.message');

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No number !');
  } else if (guess === number) {
    titleElement.textContent = 'YOU ARE WINNER !';
    displayMessage('✅ Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;

      displayMessage(guess > number ? 'Too high! ' : 'Too low !');
    } else {
      displayMessage('😥 You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Coding Challenge #1
const btnAgain = document.querySelector('.again');
btnAgain.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing ...');
  document.querySelector('.number').textContent = '?';
});
// as always... Done ! :)
