var start = document.querySelector('.start');
var questionEl = document.querySelector('.question');
var userChoice = document.querySelectorAll('.userChoice');
var AnswerA = document.querySelector('#A');
var AnswerB = document.querySelector('#B');
var AnswerC = document.querySelector('#C');
var AnswerD = document.querySelector('#D');
var timerEl = document.querySelector('.timer');
var currentScore = document.querySelector('.currentScore');
var subtractTime = 10;

start.addEventListener('click', StartQuiz);

for (var i = 0; i < userChoice.length; i++) {
  userChoice[i].addEventListener('click', CheckAnswer);
}


var questions = [   
    { 
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<script>',
        b: '<javascript>',
        c: '<js>',
        d: '<scripting>',
        correct: 'A'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        a: '<script href="xxx.js">',
        b: '<script name="xxx.js">',
        c: '<script src="xxx.js">',
        d: '<script file="xxx.js">',
        correct: 'C'
    },
    { 
        question: 'How do you write "Hello World: in an alert box?',
        a: 'alertBox("Hello World");',
        b: 'msg("Hello World:);',
        c: 'msgBox("Hello World");',
        d: 'alert("Hello World");',
        correct: 'D'
},
    {
        question: 'How do you create a function in JavaScript?',
        a: 'function = myFunction()',
        b: 'function myFunction()',
        c: 'function:myFunction()',  
        d: 'function myFunction()',
        correct: 'B'
    },
    {
        question: 'How do you call a function named "myFunction"?',
        a: 'call myFunction()',
        b: 'call function myFunction()',
        c: 'myFunction()',
        d: 'myFunction',
        correct: 'C'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        a: 'if i = 5 then',
        b: 'if i = 5',
        c: 'if (i == 5)',
        d: 'if i == 5 then',
        correct: 'C'
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        a: 'if (i != 5)',
        b: 'if i <> 5',
        c: 'if (i <> 5)',
        d: 'if i =! 5 then',
        correct: 'A'
    },
    {
        question: 'How does a WHILE loop start?',
        a: 'while (i <= 10; i++)',
        b: 'while i = 1 to 10',
        c: 'while (i <= 10)',
        d: 'while (i <= 10; i++)',
        correct: 'C'
    },
    {
        question: 'How does a FOR loop start?',
        a: 'for (i = 0; i <= 5)',
        b: 'for (i <= 5; i++)',
        c: 'for i = 1 to 5',
        d: 'for (i = 0; i <= 5; i++)',
        correct: 'D'
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        a: '"This is a comment"',
        b: '//This is a comment',
        c: '<!--This is a comment-->',
        d: '/*This is a comment*/',
        correct: 'B'
    }
];

function StartQuiz() {
    score = 0;
    timerCount = 75;
    highscores = [];
    activeQuestion = 0;
    Timer()
    renderQuestion()
    start.classList.add('hide');
}

function renderQuestion() {
    questionEl.innerText = questions[activeQuestion].question;
    AnswerA.innerText = questions[activeQuestion].a;
    AnswerB.innerText = questions[activeQuestion].b;
    AnswerC.innerText = questions[activeQuestion].c;
    AnswerD.innerText = questions[activeQuestion].d;
    currentscore.innerText = score;
};

function CheckAnswer(e) {
    if (e.target.id == questions[activeQuestion].correct) {
        score++;
        currentScore.innerText = score;
    } else {
        timerCount = timerCount - subtractTime;
        timerCheck();
    }

    activeQuestion++;

    if (activeQuestion == questions.length) {
        GameEnd();
    } else {
        renderQuestion();
    }
}

function timerCheck() {
    if (timerCount <= 0) {
        clearInterval(timer);
        GameEnd();
    }
}

function Timer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            GameEnd();

        }

    }, 1000);
};


function GameEnd() {
    var Initials = window.prompt('What are your initials');
    var highScore = {
        Initials: Initials,
        score: score, 
    }
    localStorage.setItem('highScore', JSON.stringify(highScore));
    renderHighScoreList();
};

function renderHighScoreList() {
    var highScoreList = JSON.parse(localStorage.getItem('highScore'));
    if (highScoreList) {
        var ul = document.getElementById('list');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(highScoreList.score + ' -- ' + highScoreList.Initials));
        ul.appendChild(li);
        Complete();

    }
};

function Complete () {
    var startOver = window.confirm('Quiz complete. Would you like to go again?');
    if (startOver) {
        clearInterval(timer);
        StartQuiz();
    } else {
        timerEl.textContent = 0;
        }

    }

