'use strict';
//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const Score0El = document.getElementById('score--0'); //both ways are same
const Score1El = document.querySelector('#score--1');
const currunt0El = document.getElementById('current--0');
const currunt1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting Conditions
Score0El.textContent = 0;
Score1El.textContent = 0;
diceEl.classList.add('hidden');

let playing, activePlayer, curruntScore, Scores;

const init = function () {
  Scores = [0, 0];
  curruntScore = 0;
  activePlayer = 0;
  playing = true;

  Score0El.textContent = 0;
  Score1El.textContent = 0;
  currunt0El.textContent = 0;
  currunt1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  curruntScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling Dice Functionaliy
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1-generating Random Dice Rolls
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2-Dispay dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3-check for role 1
    if (dice !== 1) {
      //Add dice to currunt score
      curruntScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curruntScore;
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add currunt score to active player score
    Scores[activePlayer] += curruntScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      Scores[activePlayer];
    //2.check if player score is >= 100
    if (Scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      //finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
