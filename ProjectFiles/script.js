'use strict';
//Selecting Elements
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
console.log(diceEl);
diceEl.classList.add('hidden');

let curruntScore = 0;

//Rolling Dice Functionaliy
btnRoll.addEventListener('click', function () {
  //1-generating Random Dice Rolls
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2-Dispay dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3-check for role 1
  if (dice !== 1) {
    //Add dice to currunt score
    curruntScore += dice;
    currunt0El.textContent = curruntScore;
  } else {
    //Switch player
  }
});
