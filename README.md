# Quiz



* GIVEN I am taking a code quiz
* WHEN I click the start button
* THEN a timer starts and I am presented with a question
* WHEN I answer a question
* THEN I am presented with another question
* WHEN I answer a question incorrectly
* THEN time is subtracted from the clock
* WHEN all questions are answered or the timer reaches 0
* THEN the game is over
* WHEN the game is over
* THEN I can save my initials and score




----------------------------------------------------------------


-onClick --> start button
    -timer starts 
    -present a question
        -present the answers 
            -onclick --> answerbutton
                - if it is wrong
                    -subtract time from timer
                    -do something else if it's correct
                
                -generates the next question

-if all questions or timer is 0
    -gameover man
        -save initials and score



