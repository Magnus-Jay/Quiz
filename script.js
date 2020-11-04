
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
var questionText = document.querySelector(".questionArea");
var answerBtnOne = document.querySelector("#answerOneBtn");
var answerBtnTwo = document.querySelector("#answerTwoBtn");
var answerBtnThree = document.querySelector("#answerThreeBtn");
var answerBtnFour = document.querySelector("#answerFourBtn");
var highScoreList = document.querySelector("#high-score-list");



var startGameBlock = document.querySelector(".startGame") 
var questionBlock = document.querySelector(".questions"); 
var answersBlock = document.querySelector(".answers"); 
var submitBtn = document.querySelector(".submitArea"); 
var timeRemaining = document.querySelector(".timeRemaining"); 
var gameOver = document.querySelector(".endGame"); 
var userScore = document.querySelector(".score");
var userName = document.querySelector("#userName");


document.querySelector("#startGameBtn").addEventListener("click",function() {
    startGameBlock.style.display = "none";
    questionBlock.style.display = "block";
    answersBlock.style.display = "block";
    timeRemaining.style.display = "block";
    quizTimer();
    questionSelector();
})


function quizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeRemaining.textContent = "You have " + secondsLeft + " seconds remaining";
      if(secondsLeft <= 0) {
        endTheGame(timerInterval)
      }
    }, 1000);
  }

  function endTheGame(endTime) {
    clearInterval(endTime);
    questionBlock.style.display = "none";
    answersBlock.style.display = "none";
    timeRemaining.style.display = "none";
    gameOver.style.display = "block";
  }


function questionSelector() {
    questionText.textContent = quizQuestions[questionNum].question;
    answerBtnOne.textContent = quizQuestions[questionNum].answer1;
    answerBtnTwo.textContent = quizQuestions[questionNum].answer2;
    answerBtnThree.textContent = quizQuestions[questionNum].answer3;
}


var buttonOneText
var buttonTwoText
var buttonThreeText
var buttonFourText

answersBlock.addEventListener("click", function(event) {

  if(event.target.matches("button")){
    var userAnswer = (event.target.innerHTML)
    var correctAnswer = quizQuestions[questionNum].correctAnswer;
    questionNum++;
 
    if(userAnswer === correctAnswer) {
      quizScore = quizScore + 20;

    } else {
      secondsLeft = secondsLeft - 10;
    }
    if(questionNum == 5) {
      endTheGame(0);
      return;
    }
    questionSelector();
  };
})

function renderHighScore() {
  for (let i = 0; i < listNum; i++) {
    
    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.innerHTML = quizScore + userName.value;
    highScoreList.appendChild(li);
  }
}


var highScoreButton = document.querySelector("#highScoreButton")
highScoreButton.addEventListener("click", function(event) {
  localStorage.setItem("Quiz score", quizScore);
  localStorage.setItem("user name", userName.value);
  renderHighScore();

  })

