
//Selects all ID elements to be interacted with via HTML
var header = document.getElementById("main-head");
var scoresContainer = document.getElementById("scores");
var timer = document.getElementById("countdown");
var quizContainer = document.getElementById("quiz");
var quizQuestions = document.getElementById("question");
var results = document.getElementById("results");
var startQuiz = document.getElementById("quiz-start");
var finishQuiz = document.getElementById("quiz-end");
var final = document.getElementById("final-score");


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
var timeLeft = 10;
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

//Starts timer
function countdown() {
    startQuiz.classList.add("d-none");
    headText.classList.add("d-none");

    showquestion();

    var timeInterval = setInterval(function () {
        timer.innerHTML = "Timer: Only" + timeLeft + "seconds left!"
        if (timeLeft === 0) {
            clearInterval(timeInterval);

            console.log("Time's Up.");
        }
        if (timeLeft <= 0) {
            clearInterval;
        }
        else {
            timeLeft--;
            timer.textContent = "Time Left " + timeLeft;
        }
    }, 1000);
}

//Showing Questions
function showquestion() {
    var userQuestion = myQuestions[questionsIndex].question;
    var userchoices = myQuestions[questionsIndex].answers;

    quizContainer.textContent = userQuestion;

    for (i = 0; i < userchoices.length; i++) {
        var choicesButton = document.createElement("button");
        choicesButton.setAttribute();
        choicesButton.textContent = userchoices[i];
        quizContainer.appendChild(choicesButton);
        choicesButton.addEventListener("click", checkAnswer);
    }
}

//Checking Answers
function checkAnswer(event) {
    var quizQuestions = myQuestions.length;
    var answer = myQuestions[questionsIndex].answer;
    var correctAnswer = event.target.innerText;

    if (correctAnswer === answer) {
        seeResults.textContent = "Correct";
        score++;
        console.log(score);
        finalScore.textContent = "You scored " + score + "!";
    }
    else {
        seeResults.textContent = "Wrong";
        secondsLeft -= 6;
    }

    if (questionsIndex === quizQuestions - 1) {
        timeLeft = 0;
        quizContainer.classList.add("d-none");
        results.classList.add("d-none");
        finishQuiz.classList.remove("d-none");
    }

    else {
        questionIndex++;
        showQuestion();
    }

}
//Storing score & user input to localstorage
var userInfo = document.getElementById("initials");
userInfo.textContent = "";

var submitInfoButton = document.getElementById("submit");
submitInfoButton.addEventListener("click", function () {
    var initialText = userInfo.value;
    if (initialText.length === 0) {

        alert("Error: Please enter your initials.");
    } else {
        var finalText = {
            initials: initialText,
            score: score
        }
        console.log(finalText);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalText);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        window.location.href = "highscores.html"
    }
});







//Lose Game if/when timer reaches 0
function loseGame() {
    if (timeLeft === 0) {
        alert("GAME OVER!");
        console.log("GAME OVER!")
    }

};

