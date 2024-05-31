'use strict';
const check_btn = document.querySelector('.check');
const msg = document.querySelector('.message');
const guess = document.querySelector('.guess');
const body = document.querySelector('body');
const again_btn = document.querySelector('.again');
let scoreDiplay = document.querySelector('.score');
let secret = document.querySelector('.number');
let highestScore = document.querySelector('.highscore');

//secretNum.textContent = Number();
let secretNum = Number(Math.trunc(Math.random() * 20) + 1);
let highScore = 0;
let score = 20;

check_btn.addEventListener('click', () => {
  Guess_check(score, guess, secretNum);
});

again_btn.addEventListener('click', () => {
  //reset the default set up and css
  body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  msg.textContent = 'Start guessing...';
  guess.value = '';
  score = 20;
  scoreDiplay.textContent = score;
  secretNum = Number(Math.trunc(Math.random() * 20) + 1);
});

function Guess_check(score, guess, secretNum) {
  // console.log(score, guess, secretNum);
  if (scoreDiplay.textContent >= 1) {
    // msg.textContent = guess > secretNum ? '📈 Too High!' : '📉 Too Low!';
    let guessAsNum = Number(guess.valueAsNumber);
    scoreDiplay.textContent = Score(guessAsNum, secretNum);
  } else if (score <= 0) {
    msg.textContent = '😥😣🧨 You are lost the game! Try again';
    score = 0;
    scoreDiplay.textContent = score;
  }
}
function Score(guess, secretNum) {
  if (guess > secretNum) {
    msg.textContent = '📈 Too High!';
    score--;
  } else if (guess < secretNum) {
    msg.textContent = '📉 Too Low!';
    score--;
  } else if (guess === secretNum) {
    // Correct number
    msg.textContent = '🎉 Correct Number';
    secret.textContent = secretNum;

    if (score > highScore) {
      //store the highscore
      highScore = score;
      highestScore.textContent = highScore;
    }
    //inline style
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (!guess.value) {
    //falsy input value
    msg.textContent = '🚨 Not Number!';
  }
  if (score === 0) {
    msg.textContent = '😥😣🧨 You are lost the game! Try again';
  }
  console.log(guess, score, secretNum);
  return score;
}
