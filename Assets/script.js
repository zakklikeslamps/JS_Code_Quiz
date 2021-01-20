
var questionIndex = 0;
var score = 0;
var timeLeft = 30;

//Selects all ID elements to be interacted with
var quizContainer = document.getElementById("quiz");
var scoresContainer = document.getElementById("scores");
var submitButton = document.getElementById("submit");
var timerEl = document.getElementById("countdown");


//Starts quiz
var start = document.getElementById("start");
console.log(start)
start.addEventListener("click", function () {
    countdown();
    document.getElementById("start").style.display = "none"
    document.getElementById("start-quiz").textContent = questions
})

//Starts timer
function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            console.log("Time's Up.");
        }
        if (timeLeft <= 0) {
            clearInterval(holdInterval);
        }

        else {
            timeLeft--;
            timerEl.textContent = "Time Left " + timeLeft;
        }
    }, 1000);
}

var questions = [
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





//The loseGame function is called when/if timer reaches 0
function loseGame() {
    if (timeLeft === 0) {
        alert("GAME OVER!");
        console.log("GAME OVER!")
    }
    wordBlank.Blank.textContent = "GAME OVER!";
    loseCounter--;
    startButton.disabled = false;
    setLosses()
}

//Questions; held within an object, within an object. 


