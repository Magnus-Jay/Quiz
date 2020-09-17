var imgBox = document.getElementById("image-box");
var stBtn = document.getElementById("start-bttn");
var nxtQstn = document.getElementById("next-bttn")
var cageImg = document.getElementById("cage-pic")
var questionText = document.getElementById("question-text")
var timerSpot = document.getElementById("timer-spot")
var timerTxt = document.getElementById("timer-txt")
var h1 = document.getElementById("h1")

// var container = getElementById("container")
// var picsIndex = 0;





var questions = [


    {
        question: 'Which Nic Cage film is this?',
        answer1: 'The Rock',
        answer2: 'When Harry Met Sally',
        answer3: 'Mulan',
        correctAnswer: 'The Rock',
    } ,
    {
        question: 'Which Nic Cage film is this?',
        answer1: 'Batman',
        answer2: 'Moonstruck',
        answer3: 'Cars',
        correctAnswer: 'Moonstruck',
    } ,
    {
        question: 'Which Nic Cage film is this?',
        answer1: 'Wall-E',
        answer2: 'Baywatch',
        answer3: 'National Treasure',
        correctAnswer: 'National Treasure',
    } ,
    {
        question: 'Which Nic Cage film is this?',
        answer1: 'Bad Lieutenant',
        answer2: 'Bugs Life',
        answer3: 'Gladiator',
        correctAnswer: 'Bad Lieutenant',
    } ,
    
    
]

;

// function sendQuestion () {

questionText.textContent = questions[0].question


// }





// var pictureList = [

//     {
//         url: "https://i.pinimg.com/originals/d1/bc/62/d1bc627ac993f8bc07a92bf117ae660b.jpg",
//         desc: "long hair, wearing a trenchcoat"
//     },

//     {
//         url: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/The-Rock-700x300.jpg",
//         desc: "kneeling and holding flairs"
//     },

//     {
//         url: "https://3.bp.blogspot.com/_V2GF7zO6_M8/TL-8AEo6R0I/AAAAAAAACws/yTlr9LZO344/s1600/nicolas_cage_moonstruck.jpg",
//         desc: "man with disheveled hair in white tank top"
//     },

//     {
//         url: "https://medias.spotern.com/spots/w640/76/76875-1532336916.jpg",
//         desc: "man wearing sunglasses with reeding hairline"
//     },
//     {
//         url: "https://offscreen.com/images/articles/_resized/CAGE-bigger.jpg",
//         desc: "man yelling with his fingers pointing up in the air"
//     },

// ]

    