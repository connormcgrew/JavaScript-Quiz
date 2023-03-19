var start = document.querySelector('#start');
var question = document.querySelector('#question');
var answerA = document.querySelector('#answerA');
var answerB = document.querySelector('#answerB');
var answerC = document.querySelector('#answerC');
var answerD = document.querySelector('#answerD');
var userselection = document.querySelector('#userselection');
var score = document.querySelector('#score');
var timer = document.querySelector('#timer');
var incorrect = 5;


start.addEventListener('click', startQuiz);
for (var i = 0; i < userselection.length; i++) {
    userselection[i].addEventListener('click', checkAnswer);
}  

