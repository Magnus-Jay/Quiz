var imgBox = document.getElementById("image-box");
var stBtn = document.getElementById("start-bttn");
var but1 = document.getElementById("an1")
var but2 = document.getElementById("an2")
var but3 = document.getElementById("an3")
var nxtQstn = document.getElementById("next-bttn")
var cageImg = document.getElementById("cage-pic")
var questionText = document.getElementById("question-text")
var timerSpot = document.getElementById("timer-spot")
var timerTxt = document.getElementById("timer-txt")
var h1 = document.getElementById("h1")
var questionIndex = 0;

// var container = getElementById("container")
// var picsIndex = 0;





var questions = [


    {
        question: 'Which Nic Cage film did he star with Sean Connery?',
        answer1: 'The Rock',
        answer2: 'When Harry Met Sally',
        answer3: 'Mulan',
        correctAnswer: 'The Rock',
    } ,
    {
        question: 'In which film did Nic Cage star with Cher?',
        answer1: 'Batman',
        answer2: 'Moonstruck',
        answer3: 'Cars',
        correctAnswer: 'Moonstruck',
    } ,
    {
        question: 'What film did Nic Cage play a treasure hunter?',
        answer1: 'Wall-E',
        answer2: 'Baywatch',
        answer3: 'National Treasure',
        correctAnswer: 'National Treasure',
    } ,
    {
        question: 'Which Nic Cage film had 50-cent play a role?',
        answer1: 'Bad Lieutenant',
        answer2: 'Bugs Life',
        answer3: 'Gladiator',
        correctAnswer: 'Bad Lieutenant',
    } ,
    
    
]

;

document.getElementById('start-bttn').addEventListener('click', function
(beginGame) {
stBtn.style.display ="none"

questionText.textContent = questions[0].question
but1.textContent = questions[0].answer1
but2.textContent = questions[0].answer2
but3.textContent = questions[0].answer3

}

)   

function nextQuestion() {
    questionText.textContent = questions[1].question
    but1.textContent = questions[0].answer1
    but2.textContent = questions[0].answer2
    but3.textContent = questions[0].answer3

}
but1.addEventListener('click', function() {

});