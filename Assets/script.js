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
var currentQuestion = 0;


start.addEventListener('click', startQuiz);
for (var i = 0; i < userselection.length; i++) {
    userselection[i].addEventListener('click', checkAnswer);
}  

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

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 10; // 10s

function startQuiz() {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.quiz').style.display = 'block';
    score.innerText = 0;
    timer.innerText = 60;
    displayQuestion(0);
    setInterval(updateTimer, 1000);
    userselection.forEach((button) => {
      button.addEventListener('click', checkAnswer);
    });
    start.removeEventListener('click', startQuiz);
  }

function displayQuestion() {
    var q = questions[currentQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;
  }

  function checkAnswer(e) {
    var selectedOption = e.target.id;
    var correctOption = questions[currentQuestion].correct;
    if (selectedOption === correctOption) {
      score++;
    } else {
      incorrect--;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    clearInterval(timer);
    question.innerHTML = "<p>End of Quiz!</p>";
    answerA.innerHTML = "";
    answerB.innerHTML = "";
    answerC.innerHTML = "";
    answerD.innerHTML = "";
    userselection.forEach((button) => {
      button.removeEventListener('click', checkAnswer);
    });
    start.addEventListener('click', startQuiz);
    start.innerText = "Restart Quiz";
    score.innerText = "Final Score: " + score + " out of " + questions.length;
    timer.innerText = "";
    currentQuestion = 0;
    score = 0;
    incorrect = 5;
  }


function Submit(e) {
    if (e) {
        console.log(e.target); 
        console.log(e.target.id); 
    }
    if (e.target.id == questions[currentQuestion].correct) {
        console.log("correct answer");
        score++;
        console.log(score); 
    } else {
        console.log("wrong answer");
        timerCount = timerCount - wrongTime; 
        timerCheck()
    }
    if (questions[currentQuestion].question == "End of Quiz!") { 
        GameOver()
    } else {
        currentQuestion++;
        displayQuestion()
    }
};


function timerCheck() {
    if (timerCount <= 0) {
        clearInterval(timer);
        GameOver();
    }
}

function Timer() {
    timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
        GameOver();
    }
}, 1000);
};

function GameOver() {
    var Initials = prompt("Enter your initials");
    var highscore = {Initials: Initials, score: score,};
localStorage.setItem("highscore", JSON.stringify(highscore));
renderHighscoreList();
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







