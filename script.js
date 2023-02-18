'use strict';

/*
console.log(displayMessage);
displayMessage = 'Correct Number 🎉';
console.log(displayMessage);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let winningNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message}


document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

if(!guess){
    displayMessage = 'No number! ⛔';
} else if(guess > 20){
    if(score > 1) {
        displayMessage('Your Guess is above allowed range! 📈');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('Game over! You lost the game :(');
        document.querySelector('.score').textContent = 0;
    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} else if(guess < 0){
    if(score > 1) {
        displayMessage('Your Guess is below allowed range! 📈');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('Game over! You lost the game :(');
        document.querySelector('.score').textContent = 0;
    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} else if(guess === winningNumber){
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    displayMessage('Correct Number! You won the game :) 🎉');
    
    document.querySelector('.number').textContent = winningNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore + '🎉';

    document.querySelector('.page').style.backgroundColor = '#60b347';
    document.querySelector('.game-title-number').style.width = '200px';
    
} else if(guess !== winningNumber){
    if(score > 1) {
        displayMessage(guess > winningNumber ? 'Too high! 📈' : 'Too low! 📉');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('Game over! You lost the game :(');
        document.querySelector('.score').textContent = 0;
    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} 
})

document.querySelector('.again').addEventListener('click', function(){
    winningNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing..');
    document.querySelector('.page').style.backgroundColor = 'rgb(131, 130, 128)';
    document.querySelector('.game-title-number').style.width = '100px';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = highscore;
    

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
})
