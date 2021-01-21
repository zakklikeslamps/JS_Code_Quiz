
//Selects all ID elements to be interacted with via HTML
var header = document.getElementById("main-head");
var scoresContainer = document.getElementById("scores");
var timer = document.getElementById("countdown");
var quizContainer = document.getElementById("quiz");
var quizQuestions = document.getElementById("question");
var seeResults = document.getElementById("results");
var startQuiz = document.getElementById("quiz-start");
var finishQuiz = document.getElementById("quiz-end");
var final = document.getElementById("final-score");
var myInfo = document.getElementById("initials");

//Creates access to the highscore page 
var scoresText = document.createElement("a");
scoresText.setAttribute("href", "highscores.html");
scoresText.innerHTML = "See High Scores";
scores.appendChild(scoresText);

//User's task; Header/main text
var headText = document.createElement("p");
headText.innerHTML = "Try to answer the questions correctly within the time limit. If you answer incorrectly you will lose time.";

//Start Quiz
quizContainer.appendChild(headText);
var startButton = document.createElement("button");
startButton.setAttribute("class", "btn-info");
startButton.innerHTML = "Start Quiz";
startQuiz.appendChild(startButton);
timer.textContent = "Timer : ";
console.log("Start");

//Set Variables
var questionsIndex = 0;
var score = 0;
var timeLeft = 30;
var myQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            A: "Hitmonlee",
            B: "Hitman Lives",
            C: "Happytime-Makeup-Language",
            D: "Hypertext-Markup-Language"
        },
        correctAnswer: "D"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            A: "Come See the Show",
            B: "Catch Some Surf",
            C: "Corrupt Section Surveyed",
            D: "Cascading Style Sheets"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the relationship between HTML & CSS?",
        answers: {
            A: "They work in tandem to make powerful, interactive webpages.",
            B: "CSS creates a web page while HTML provies it's functionality.",
            C: "HTML is a web page's basic elemental structure, while CSS styles those elements.",
            D: "None: They're independent of each other."
        },
        correctAnswer: "C"
    },
    {
        question: "What does JavaScript do for a web page?",
        answers: {
            A: "Provides basic interactivity & functionality for users.",
            B: "Creates links to other web pages.",
            C: "Opens new tabs in a browser.",
            D: "All the above"
        },
        correctAnswer: "A"
    },
    {
        question: "BONUS! Quiz custodiet ipsos custodes?",
        answers: {
            A: "JLU",
            B: "Avengers",
            C: "TMNT",
            D: "All the above"
        },
        correctAnswer: "D"
    }
];

//Start Button 
startQuiz.addEventListener("click", countdown);
function
    //Starts timer
    countdown() {
    startQuiz.classList.add("d-none");
    headText.classList.add("d-none");

    showquestions();

    var timeInterval = setInterval(function () {
        timer.innerHTML = "Timer: Only" + timeLeft + "seconds left!"
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            finishQuiz.classList.remove("d-none");
            quizContainer.classList.remove("d-none");
            console.log("Time's Up.");
        }
        if (timeLeft <= 0) {
            clearInterval(holdInterval);
        }
        else {
            timeLeft--;
            timer.textContent = "Time Left " + timeLeft;
        }
    }, 1000);
}

//Showing Questions
function showquestions() {
    var userQuestions = myQuestions[questionsIndex].question;
    var userchoices = myQuestions[questionsIndex].answers;

    quizContainer.textContent = userQuestions;

    for (i = 0; i < userchoices.length; i++) {
        var choicesButton = document.createElement("button");
        choicesButton.setAttribute();
        choicesButton.addEventListener("click", checkAnswer);
    }
}

//Checking Answers
function checkAnswer(event) {
    var quizQuestion = myQuestions.length;
    var answer = myQuestions[questionIndex].answer;
    var correctAnswer = event.target.innerText;

    if (correctAnswer === answer) {
        seeResults.textContent = "Correct";
    }
}





//Lose Game if/when timer reaches 0
function loseGame() {
    if (timeLeft === 0) {
        alert("GAME OVER!");
        console.log("GAME OVER!")
    }

};

