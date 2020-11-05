//Quiz questions
const quizQuestions = [

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

var questionsRemaining = 5;
var correctAnswer= "";
var quizScore = 0;
var secondsLeft = 30;
var questionNum = 0;
var listNum = 1;
var questionText = $(".questionArea");
var answerBtnOne = $("#answerOneBtn");
var answerBtnTwo = $("#answerTwoBtn");
var answerBtnThree = $("#answerThreeBtn");
var answerBtnFour = $("#answerFourBtn");
var highScoreList = $("#high-score-list");


var startGameBlock = $(".startGame") 
var questionBlock = $(".questions"); 
var answersBlock = $(".answers"); 
var submitBtn = $(".submitArea"); 
var timeRemaining = $(".timeRemaining"); 
var gameOver = $(".endGame"); 
var userScore = $(".score");
var userName = $("#userName");

$("#startGameBtn").addEventListener("click",function() {
    startGameBlock.style.display = "none";
    questionBlock.style.display = "block";
    answersBlock.style.display = "block";
    timeRemaining.style.display = "block";
    timer();
    questionBank();
})


// function timer() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeRemaining.textContent = "You have " + secondsLeft + " seconds remaining";
//       if(secondsLeft <= 0) {
//         endTheGame(timerInterval)
//       }
//     }, 1000);
//   }






function questionBank() {
    questionText.textContent = quizQuestions[questionNum].question;
    answerBtnOne.textContent = quizQuestions[questionNum].answer1;
    answerBtnTwo.textContent = quizQuestions[questionNum].answer2;
    answerBtnThree.textContent = quizQuestions[questionNum].answer3;
}


function endTheGame(timeoVer) {
    clearInterval(timeoVer);
    questionBlock.style.display = "none";
    answersBlock.style.display = "none";
    timeRemaining.style.display = "none";
    gameOver.style.display = "block";
  }
