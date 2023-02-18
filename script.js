'use strict';

let winningNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

if(!guess){
    displayMessage('No number! ⛔');
} else if(guess > 20){
    if(score > 1) {
        displayMessage('Way above range! 📈');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('Game over! You lost the game :(');
        document.querySelector('.score').textContent = 0;

        document.querySelector('.number').style.color = '#000';
        document.querySelector('.page').style.backgroundColor = 'red';
        document.querySelector('.game-title-number').style.width = '200px';
        document.querySelector('.game-title-number').style.backgroundColor = '#eee';
    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} else if(guess < 0){
    if(score > 1) {
        displayMessage('Below allowed range! 📈');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('Game over! You lost the game :(');
        document.querySelector('.score').textContent = 0;

        document.querySelector('.number').style.color = '#000';
        document.querySelector('.page').style.backgroundColor = 'red';
        document.querySelector('.game-title-number').style.width = '200px';
        document.querySelector('.game-title-number').style.backgroundColor = '#eee';
    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} else if(guess === winningNumber){
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    } else {
        highscore = highscore;
        document.querySelector('.highscore').textContent = highscore;
    }
    displayMessage('Hoooray! You won :) 🎉');
    
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
        
        document.querySelector('.number').style.color = '#000';
        document.querySelector('.game-title-number').style.width = '200px';
        document.querySelector('.page').style.backgroundColor = '#60b347';
        document.querySelector('.game-title-number').style.backgroundColor = '#eee';
        

    }
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
} 
})

document.querySelector('.again').addEventListener('click', function(){
    winningNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    highscore = highscore;

    displayMessage('Start guessing...');
    document.querySelector('.page').style.backgroundColor = 'rgb(131, 130, 128)';
    document.querySelector('.game-title-number').style.width = '100px';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').value = winningNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = highscore;
    

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
})
