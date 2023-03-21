var start = document.querySelector('#start');
var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var score = document.querySelector('#score');
var timerElement = document.querySelector('#timer');
var incorrect = 10;
var currentQuestion = 0;
var timerCount = 60;
var countdown;
var incorrectAnswerSubmitted = false;
var questions = [   
    { 
        question: "Inside which HTML element do we put the JavaScript?",
        answerA: "<script>",
        answerB: "<javascript>",
        answerC: "<js>",
        answerD: "<scripting>",
        correct: "A"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answerA: "<script href='xxx.js'>",
        answerB: "<script name='xxx.js'>",
        answerC: "<script src='xxx.js'>",
        answerD: "<script file='xxx.js'>",
        correct: "C"
    },
    { 
        question: "How do you write 'Hello World' in an alert box?",
        answerA: "alertBox('Hello World');",
        answerB: "msg('Hello World');",
        answerC: "msgBox('Hello World');",
        answerD: "alert('Hello World');",
        correct: "D"
},
    {
        question: "How do you create a function in JavaScript?",
        answerA: "function = myFunction()",
        answerB: "function myFunction()",
        answerC: "function:myFunction()",  
        answerD: "function myFunction()",
        correct: "B"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answerA: "call myFunction()",
        answerB: "call function myFunction()",
        answerC: "myFunction()",
        answerD: "myFunction",
        correct: "C"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answerA: "if i = 5 then",
        answerB: "if i = 5",
        answerC: "if (i == 5)",
        answerD: "if i == 5 then",
        correct: "C"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answerA: "if (i != 5)",
        answerB: "if i <> 5",
        answerC: "if (i <> 5)",
        answerD: "if i =! 5 then",
        correct: "A"
    },
    {
        question: "How does a WHILE loop start?",
        answerA: "while (i <= 10; i++)",
        answerB: "while i = 1 to 10",
        answerC: "while (i <= 10)",
        answerD: "while (i <= 10; i++)",
        correct: "C"
    },
    {
        question: "How does a FOR loop start?",
        answerA: "for (i = 0; i <= 5)",
        answerB: "for (i <= 5; i++)",
        answerC: "for i = 1 to 5",
        answerD: "for (i = 0; i <= 5; i++)",
        correct: "D"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answerA: "'This is a comment",
        answerB: "//This is a comment",
        answerC: "<!--This is a comment-->",
        answerD: "/*This is a comment*/",
        correct: "B"
    }
];
start.addEventListener('click', function() {
    document.querySelector('.content').classList.add('hidden');
    var quiz = document.querySelector('#quiz');
    quiz.classList.remove('hidden');
    startQuiz();
});

function startQuiz() {
    start.style.display = 'none';
    displayQuestion();
    Timer();
    incorrectAnswerSubmitted = false;
}

function Timer() {
    countdown = setInterval(function() {
        timerCount--;
        timerElement.innerHTML = parseInt(timerCount);
        if (timerCount <= 0) {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
}

function displayQuestion() {
    var currentQuestionData = questions[currentQuestion];
    question.textContent = currentQuestionData.question;
    answer1.textContent = currentQuestionData.answerA;
    answer2.textContent = currentQuestionData.answerB;
    answer3.textContent = currentQuestionData.answerC;
    answer4.textContent = currentQuestionData.answerD;
}

answer1.addEventListener('click', Submit);
answer2.addEventListener('click', Submit);
answer3.addEventListener('click', Submit);
answer4.addEventListener('click', Submit);

function Submit(e) {
    if (this.id == questions[currentQuestion].correct) {
        score.innerHTML = parseInt(score.innerHTML) + 1;
    } else {
        if (!incorrectAnswerSubmitted) {
            timerCount -= incorrect;
            incorrectAnswerSubmitted = true;
        }
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        incorrectAnswerSubmitted = false;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(countdown);
    question.style.display = 'none';
    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    answer4.style.display = 'none';
    var leaderboard = document.querySelector('.leaderboard');
    leaderboard.style.display = 'block';
}

function GameOver() {
    var initials = prompt("Enter your initials");
    var highScore = {
        initials: initials,
        score: score.innerHTML
    };
  
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    highScores.push(highScore);
  
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });
  
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function renderHighScoreList() { 
    var highScoreList = JSON.parse(localStorage.getItem("highScore")); 
    if (highScoreList) { 
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(highScoreList.score + " -- " + highScoreList.Initials));
        ul.appendChild(li);
        WellDone();
    }
};

function WellDone() {
    var playAgain = confirm("Well Done! You scored " + score + " points. Play again?");
    if (playAgain) {
       clearInterval(timer);
       start();
    }
    else {
       timerElement.textContent = "0";
    }
}