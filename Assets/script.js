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