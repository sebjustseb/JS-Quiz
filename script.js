const questions = [{
    question:'q1', choices: ['c1','c2','c3','c4'], answer: 'c1'
}, {
    question: 'q2', choices: ['c1','c2','c3','c4'], answer: 'c3'
}, {
    question: 'q3', choices: ['c1','c2','c3','c4'], answer: 'c2'
}, {
    question: 'q4', choices: ['c1','c2','c3','c4'], answer: 'c1'
}, {
    question: 'q5', choices: ['c1','c2','c3','c4'], answer: 'c4'
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
var score = timeLeft;
var QSelector = document.getElementById('questions');
var HSelector = document.getElementById('header');
var selector1 = document.getElementById('question1');
var selector2 = document.getElementById('c1');
var selector3 = document.getElementById('c2');
var selector4 = document.getElementById('c3');
var selector5 = document.getElementById('c4');
var selector6 = document.getElementById('scoresubmit');
var selector7 = document.getElementById('initials');
var selector8 = document.getElementById('scorelist');
var hiScoreList = JSON.parse(localStorage.getItem('initials_hiscore')) || [];
console.log(hiScoreList);

function display(){
    QSelector.classList.remove('hide');
    HSelector.classList.add('hide');

    selector1.textContent = questions[index].question
    selector2.value = questions[index].choices[0]
    selector3.value = questions[index].choices[1]
    selector4.value = questions[index].choices[2]
    selector5.value = questions[index].choices[3]
};

function countDown() {
    timer.textContent = timeLeft--;
};

function nextQuestion(event) {
    var button = event.target.value;
    var answer = questions[index].answer;
    if(answer === button) {
        alert("correct")
    } else {
        alert("incorrect")
        timeLeft = timeLeft-10;
    };
    index++;
    if(index<questions.length) {
    display();
    } else {
        clearInterval(setIntervalId);
        initInp.classList.remove('hide');
        QSelector.classList.add('hide');
        selector6.addEventListener('click', saveScore);
    }
};
function saveScore() {
    hiScore.classList.remove('hide');
    initInp.classList.add('hide');
    hiScoreList.push({
        initials:selector7.value, score:timeLeft
    });
    localStorage.setItem('initials_hiscore', JSON.stringify(hiScoreList))
    displayHiScore();
}
displayHiScore()
function displayHiScore() {
    selector8.textContent='';
    for(i=0; i<hiScoreList.length; i++) {
        var li = document.createElement('li');
        li.textContent=hiScoreList[i].initials+'-'+hiScoreList[i].score;
        selector8.appendChild(li)
    }
}
function start() {
    display();
    setIntervalId = setInterval(countDown, 1000);
};
getQuestions.addEventListener('click', nextQuestion);
startButton.addEventListener('click', start);