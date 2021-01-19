//Starts by retrieving all ID elements to be interacted with
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var timer = document.getElementById("time");
var startQuiz = document.getElementById("start");

//Set Variables
var myQuestions;

//Starts Timer
document.getElementById("start").addEventListener("click", buildQuiz);
function buildQuiz() {
    // variable to store HTML output
    var output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            var answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function startTimer() {

}

function showResults() {

}

timer.addEventListener("click", function ())

buildQuiz();

//"Submit button
submitButton.addEventListener("click", showResults);

//Questions; held within an object, within an object. 
var myQuestions = [
    {
        question: "Quiz custodiet ipsos custodes?",
        answers: {
            A: "JLU",
            B: "Avengers",
            C: "TMNT",
            D: "All the above"
        },
        correctAnswer: "D"
    },
    {
        question: "Quiz custodiet ipsos custodes?",
        answers: {
            A: "JLU",
            B: "Avengers",
            C: "TMNT",
            D: "All the above"
        },
        correctAnswer: "D"
    },
    {
        question: "Quiz custodiet ipsos custodes?",
        answers: {
            A: "JLU",
            B: "Avengers",
            C: "TMNT",
            D: "All the above"
        },
        correctAnswer: "D"
    },
    {
        question: "Quiz custodiet ipsos custodes?",
        answers: {
            A: "JLU",
            B: "Avengers",
            C: "TMNT",
            D: "All the above"
        },
        correctAnswer: "D"
    },
    {
        question: "Quiz custodiet ipsos custodes?",
        answers: {
            A: "JLU",
            B: "Avengers",
            C: "TMNT",
            D: "All the above"
        },
        correctAnswer: "D"
    }
];