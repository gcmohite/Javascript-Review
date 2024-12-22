'use strict';
// querySelectorAll() returns NodeList array, querySelector() returns the element
// const msgNode = document.querySelectorAll('.message');
// const [msgElement] = msgNode;
// console.log(msgElement.textContent);

const msg = document.querySelector('.message');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const scoreDisplay = document.querySelector('.score');
const playAgain = document.querySelector('.again');
const secretNumberField = document.querySelector(`.number`);

let secretNumber;
let score;

function init() {
  secretNumber = randomNumberGenerator(20);
  console.log(secretNumber);
  score = 5;
  scoreDisplay.textContent = score;
  checkBtn.addEventListener('click', gameLogic);
  secretNumberField.textContent = '?';
  secretNumberField.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  checkBtn.style.display = 'inline-block';
  msg.textContent = 'Start guessing...';
  msg.style.color = '#eee';
  guess.value = '';
}

init();

// helper functions

function randomNumberGenerator(num1, num2) {
  let min, max;
  // prettier-ignore
  if (!num2) { min = 0; max = num1; }
  else { min = num1; max = num2;}
  return Math.trunc(Math.random() * (max - min) + 1) + min;
}

function scoreUpdator(str) {
  score--;
  scoreDisplay.textContent = score;
  msg.textContent = str;
}

function winStyles() {
  document.body.style.backgroundColor = '#60b347';
  secretNumberField.textContent = secretNumber;
  secretNumberField.style.width = '25rem';
}

playAgain.addEventListener('click', init);

function gameLogic() {
  const guessedNumber = Number(guess.value);

  if (score > 1) {
    if (!guessedNumber) {
      msg.textContent = '⛔ No number!';
    } else if (guessedNumber === secretNumber) {
      msg.textContent = '🎉 Correct Number!';
      winStyles();
    } else if (guessedNumber > secretNumber) {
      scoreUpdator('📈 Too High!');
    } else if (guessedNumber < secretNumber) {
      scoreUpdator('📉 Too Low!');
    }
  } else {
    scoreUpdator('👎 You Lose!');
    msg.style.color = 'red';
    checkBtn.style.display = 'none';
    checkBtn.removeEventListener('click', gameLogic);
  }
}

checkBtn.addEventListener('click', gameLogic);
