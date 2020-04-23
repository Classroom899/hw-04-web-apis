// var test = "Hello World"

// console.log("Hello World");


// My array of questions for the quiz game and we also need to show the questions in some way or so to say, display them
var questionElement = document.getElementById("questions");
var answersElement = document.getElementById("answers");
var answersLeft = document.getElementById("answers-left");
var answersRight = document.getElementById("answers-right");

var questions = [
    {
        prompt: "What is a string?\n(A) Any grouping of characters surrounded by single or can be double quotes\n\ (B) A place\n\(C) An inner HTML element\n\(D) A new function",
        answer: "A"
    },
    {
        prompt: "What does null represent?\n(A) New game coming out\n\ (B) The intentional absence of value\n\(C) A new idea\n\(D) An SQL element",
        answer: "B"
    },
    {
        prompt: "What kind of number does Math.random return?\n\(A) An integer\n\ (B) A floating-point\n\(C) A whole number",
        answer: "B"
    }

]





// { q: "Is JavaScript"}






// Question tracker
var questionTracker = [];
var questionAmount = 1;

// Loop over every question object and iterate however many times you want
for (var i = 0; i < questionsAmount; i++) {
    // Display current question to user and ask
    do {
        randomQuestion = math.Floor(Math.random() * questionElement)
    } while (existingQuestions());

    display.innerHTML += questions[randomQuestion].a;

}