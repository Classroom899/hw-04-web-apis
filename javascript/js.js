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
    "question": "What kind of number does Math.random return?",
    "answer": [
        "A: An integer",
        "B: floating-point",
        "C: A whole number",
        "D: Nothing",
    ]
}
];

var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var questionElement = document.getElementById("questions");
var answersElement = document.getElementById("answers");
var answersLeft = document.getElementById("answers-left");
var answersRight = document.getElementById("answers-right");




//Flash card quiz idea

// Given I am taking a code quiz:
//When I click the start button: So we need to add in here a start timer button

function startQuiz() {
    
}

//We all need our start timer function going once we hit startQuiz

function startTimer() {
    //This will be my spot to start writing the code for the timer
    document.getElementById("startButton").disabled = true;
    var totalSeconds = 180;
    var totalMinutes = 3;
        // Write code to start the timer here
        minutesDisplay.innerText = formatMinutes(totalSeconds) //This will get us our minutes 
        secondsDisplay.innerText = formatSeconds(totalSeconds)
        var timeInterval = setInterval(function() {
          totalSeconds--; //Subtract 1
          minutesDisplay.innerText = formatMinutes(totalSeconds)
          secondsDisplay.innerText = formatSeconds(totalSeconds)
        }, 1000);
      
      if (totalSeconds === 0) {
        clearInterval(timeInterval);
        alert("Time to take a breat");
      }
}
function displayQuestion(count) {
    var paramQuestion = questions[count]
    questionElement.innerText = paramQuestion.question
    var questionArray = paramQuestion.answer
    for (var i = 0; i < questionArray.length; i++) {
        document.getElementById("answer" + (i+1)).innerText = questionArray[i] //Setting what that id is at the end and putting each sequential answer in each element
    }


}

displayQuestion(0); //Calling question 1

function formatSeconds(seconds) {
    //We are doing a function called formatSeconds, first thing we want is consolelog seconds inside formatSEconds
    var secondsLeftOver = seconds % 60
    
    if (secondsLeftOver >= 10) {
      return secondsLeftOver;
    }
    else if(secondsLeftOver < 10) {
      return "0" + secondsLeftOver;
    }
    
    
    
    
    }
    
    
    function formatMinutes(seconds) { //Parameter still  needs to be seconds. //We can name parameters anything as long as you reference them later
    var minutesLeftOver = seconds / 60
    return Math.floor(minutesLeftOver);
    
    
    
    }




// My array of questions for the quiz game and we also need to show the questions in some way or so to say, display them






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



    //Figure out a way for the display changes and change the count for a new question to be there

    //Get rid of the next button and just have the answer itself be the way it goes to the next question

