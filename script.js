'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let winningNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

if(!guess){
    document.querySelector('.message').textContent = 'No number! ⛔';
} else if(guess > 20){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Guess is above 1 - 20 allowed range! 📈';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Game over! You lost the game :(';
        document.querySelector('.score').textContent = 0;
    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} else if(guess < 0){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Guess is below 1 - 20 allowed range! 📈';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Game over! You lost the game :(';
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
    document.querySelector('.message').textContent = 'Correct Number! You won the game :) 🎉';
    
    document.querySelector('.number').textContent = winningNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore + '🎉';

    document.querySelector('.page').style.backgroundColor = '#60b347';
    document.querySelector('.game-title-number').style.width = '200px';
    
} else if(guess > winningNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too high! 📈';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Game over! You lost the game :(';
        document.querySelector('.score').textContent = 0;
    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} else if(guess < winningNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too low! 📉';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Game over! You lost the game :(';
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

    document.querySelector('.message').textContent = 'Start guessing..';
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
