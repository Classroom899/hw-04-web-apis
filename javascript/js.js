//Flash card quiz idea

// Given I am taking a code quiz:
//When I click the start button: So we need to add in here a start timer button

function startQuiz() {
    document.getElementById("startButton").innerHTML = "Start";
}


// My array of questions for the quiz game and we also need to show the questions in some way or so to say, display them

var questionElement = document.getElementById("questions");
var answersElement = document.getElementById("answers");
var answersLeft = document.getElementById("answers-left");
var answersRight = document.getElementById("answers-right");

//Create an array to start off with that includes question objects. Then I want to create a for loop to go through that array and ask each question individually while simultaneously tracking the number of questions being answered correctly and keeping score.
var questions = [{
    "question": "What is a string?",
    "answer": [
        "A: Any grouping of characters surrounded by single or double quotes",
        "B: A place",
        "C: An inner HTML element",
        "D: A new function",
    ]
},
{
    "question": "What does null represent?",
    "answer": [
        "A: A new game coming out",
        "B: The intentional absence of value",
        "C: A new idea",
        "D: An SQL element",

    ]
},
{
    "questiom": "What kind of number does Math.random return?",
    "answer": [
        "A: An integer",
        "B: floating-point",
        "C: A whole number",
        "D: Nothing",
    ]
}
];


// Question tracker
var questionTracker = [];
var questionAmount = 1;

// Loop over every question object and iterate however many times you want
for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt); //What we are passing through for the user to enter into this prompt - Need to then figure out now if the user got the answer right or if not correct
    if (response == questions[i].answer) {
        score++;
        alert("Correct! Nice job."); //Set an alert if the user got the question right and make sure this is scored with score++
    } else {
        alert("Incorrect"); //Otherwise tell the user taking this quiz that you got the question incorrect
    }

}
alert("Scored: " + score + "/" + questions.length);
    // // Display current question to user and ask
    // do {
    //     randomQuestion = math.Floor(Math.random() * questionElement)
    // } while (existingQuestions());

    // display.innerHTML += questions[randomQuestion].a;

