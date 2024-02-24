const questions = [{
    question:'q1', choices: ['c1','c2','c3','c4'], answer: 'c1'
}, {
    question: 'q2', choices: ['c1','c2','c3','c4'], answer: 'c1'
}, {
    question: 'q3', choices: ['c1','c2','c3','c4'], answer: 'c1'
}, {
    question: 'q4', choices: ['c1','c2','c3','c4'], answer: 'c1'
}, {
    question: 'q5', choices: ['c1','c2','c3','c4'], answer: 'c1'
}
];
var timer = document.getElementById('time');
var timeLeft = questions.length*15;
var index = 0;
var setIntervalId = 0;
var startButton = document.getElementById("startbutton");
var header = document.getElementById('header');
var getQuestions = document.getElementById('questions');
var initInp = document.getElementById('initinp');
var hiScore = document.getElementById('hiscore');

function display(){
    var selector1 = document.getElementById('question1');
    var selector2 = document.getElementById('c1');
    var selector3 = document.getElementById('c2');
    var selector4 = document.getElementById('c3');
    var selector5 = document.getElementById('c4');
    var HSelector = document.getElementById('header');
    var QSelector = document.getElementById('questions');

    QSelector.classList.remove('hide');
    HSelector.classList.add('hide');

    selector1.textContent = questions[index].question
    selector2.textContent = questions[index].choices[0]
    selector3.textContent = questions[index].choices[1]
    selector4.textContent = questions[index].choices[2]
    selector5.textContent = questions[index].choices[3]
};

function countDown() {
    timer.textContent = timeLeft--;
};

function nextQuestion() {
    index++;
    display();
};

function start() {
    display();
    setIntervalId = setInterval(countDown, 1000);
};
getQuestions.addEventListener('click', nextQuestion);
startButton.addEventListener('click', start);