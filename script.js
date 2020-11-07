
var questionsRemaining = 4;
var rightAnswer= "";
var quizScore = 0;
var secondsLeft = 30;
var questionNum = 0;
var listNum = 1;



var startGameContainer = document.querySelector(".startGame") 
var questionContainer = document.querySelector(".questions"); 
var answersContainer = document.querySelector(".answers"); 
var submitBtn = document.querySelector(".submitArea"); 
var timeRemaining = document.querySelector(".timeRemaining"); 
var gameOver = document.querySelector(".endGame"); 
var userScore = document.querySelector(".score"); 
var userName = document.querySelector("#userName");


var questionVerbiage = document.querySelector(".questionArea");
var answerBtnOne = document.querySelector("#answerBtnOne");
var answerBtnTwo = document.querySelector("#answerBtnTwo");
var answerBtnThree = document.querySelector("#answerBtnThree");
var highScoreList = document.querySelector("#high-score-list");

//Quiz questions
const quizQuestions = [

    {
        question: 'Which Nic Cage film did he star with Sean Connery?',
        answer1: 'The Rock',
        answer2: 'When Harry Met Sally',
        answer3: 'Mulan',
        rightAnswer: 'The Rock',
    } ,
    {
        question: 'In which film did Nic Cage star with Cher?',
        answer1: 'Batman',
        answer2: 'Moonstruck',
        answer3: 'Cars',
        rightAnswer: 'Moonstruck',
    } ,
    {
        question: 'What film did Nic Cage play a treasure hunter?',
        answer1: 'Wall-E',
        answer2: 'Baywatch',
        answer3: 'National Treasure',
        rightAnswer: 'National Treasure',
    } ,
    {
        question: 'Which Nic Cage film had 50-cent play a role?',
        answer1: 'Bad Lieutenant',
        answer2: 'Bugs Life',
        answer3: 'Gladiator',
        rightAnswer: 'Bad Lieutenant'
    } 
    
    
]


document.querySelector("#startGameBtn").addEventListener("click",function() {
    startGameContainer.style.display = "none";
    questionContainer.style.display = "block";
    answersContainer.style.display = "block";
    timeRemaining.style.display = "block";
    timer();
    questionBank();
})


function timer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeRemaining.textContent = "You have " + secondsLeft + " seconds remaining";
      if(secondsLeft <= 0) {
        endTheGame(timerInterval)
      }
    }, 1000);
  }


function endTheGame(timeoVer) {
    clearInterval(timeoVer);
    questionContainer.style.display = "none";
    answersContainer.style.display = "none";
    timeRemaining.style.display = "none";
    gameOver.style.display = "block";
  }




function questionBank() {
    questionVerbiage.textContent = quizQuestions[questionNum].question;
    answerBtnOne.textContent = quizQuestions[questionNum].answer1;
    answerBtnTwo.textContent = quizQuestions[questionNum].answer2;
    answerBtnThree.textContent = quizQuestions[questionNum].answer3;
}



answersContainer.addEventListener("click", function(event) {

    if(event.target.matches("button")){
      var userAnswer = (event.target.innerHTML)
      var rightAnswer = quizQuestions[questionNum].rightAnswer;
      questionNum++;
   
      if(userAnswer === rightAnswer) {
        quizScore = quizScore + 10;
  
      } else {
        secondsLeft = secondsLeft - 10;
      }
      if(questionNum == 4) {
        endTheGame(0);
        return;
      }
      questionBank();
    };
  })
  
  function showScore() {
    for (let i = 0; i < listNum; i++) {
      
      var li = document.createElement("li");
      li.setAttribute("data-index", i);
      li.innerHTML = quizScore + userName.value;
      highScoreList.append(li);
    }
  }
  
  var highScoreButton = $("#highScoreButton")
  highScoreButton.on("click", function(event) {
    localStorage.setItem("Quiz score", quizScore);
    localStorage.setItem("user name", userName.value);
    showScore();
  
    })
  
  




