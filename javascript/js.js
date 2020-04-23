// var test = "Hello World"

// console.log("Hello World");

//Flash card quiz idea


// My array of questions for the quiz game and we also need to show the questions in some way or so to say, display them
var questionElement = document.getElementById("questions");
var answersElement = document.getElementById("answers");
var answersLeft = document.getElementById("answers-left");
var answersRight = document.getElementById("answers-right");

//Create an array to start off with of question objects then I want to create a for loop to go through this array and ask each question individually while also tracking the number of questions being answered correctly and keeping score 
var questions = [
    {
        prompt: "What is a string?\n\(A) Any grouping of characters surrounded by single or double quotes\n\(B) A place\n\(C) An inner HTML element\n\(D) A new function",
        answer: "A"
    },
    {
        prompt: "What does null represent?\n(A) New game coming out\n\(B) The intentional absence of value\n\(C) A new idea\n\(D) An SQL element",
        answer: "B"
    },
    {
        prompt: "What kind of number does Math.random return?\n\(A) An integer\n\(B) A floating-point\n\(C) A whole number",
        answer: "B"
    }

]

//





// { q: "Is JavaScript"}






// Question tracker
var questionTracker = [];
var questionAmount = 1;

// Loop over every question object and iterate however many times you want
for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt); //What we are passing through for the user to enter into this prompt - Need to then figure out now if the user got the answer right or if not correct
    if(response == questions[i].answer) {
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

