let questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
  {
    title: "What is a DOM in JavaScript?",
    choices: ["Data of Mine", "Document of Master", "Data Object Modal", "Document Object Model"],
    answer: "Document Object Model",
  },
  {
    title: "The condition in an if/else statement is enclosed within ______.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "What is computer coding?,",
    choices: ["A tv show", "a radio show", "Telling a computer what to do", "a list of functions"],
    answer: "Telling a computer what to do",
  },
  {
    title: "This programming language was the predecessor of Java, developed by James Gosling,",
    choices: ["C++", "Oak", "Python"],
    answer: "Oak",
  },
  {
    title: "What is the main foundation of all programming language?",
    choices: ["Binary/Machine Language", "Logic", "Code"],
    answer: "Binary/Machine Language",
  },
  {
    title: "What does CSS stand for?,",
    choices: ["Cascading Style Sheet", "Calculating Solutions Sheet", "Computer String Sheet"],
    answer: "Cascading Style Sheet",
  },
];
var currentIndex = 0;
var startScreen = document.getElementById("startScreen");
var startButton = document.getElementById("startQuizButton");

var questionsScreen = document.getElementById("questionsScreen");
questionsScreen.style.display = "none";
var questionsTitle = document.getElementById("questionToBeAsked");
var answersSection = document.getElementById("answers");

var highscoresSection = document.getElementById("highScoresScreens");
highscoresSection.style.display = "none"
function startQuiz() {
  startScreen.style.display = "none";
  questionsScreen.style.display = "block";
  displayQuestions();
}
function displayQuestions() {
  questionsTitle.textContent = questions[currentIndex].title;
  answersSection.innerHTML = "";
  var possibleAnswers = questions[currentIndex].choices;
  possibleAnswers.forEach(function (answer) {
    var answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.setAttribute("value", answer);
    answerButton.onclick = checkUsersAnswer;
    answersSection.appendChild(answerButton);
  });
}

function checkUsersAnswer() {
  var answerSelected = this.value;
  if (answerSelected === questions[currentIndex].answer) {
    alert("Correct");
  } else {
    alert("Incorrect");
  }
  currentIndex++;
  var totalQuestions = questions.length;
  if (currentIndex === totalQuestions) {
    endQuiz();
  } else {
    displayQuestions();
  }
}

function endQuiz() {
    questionsScreen.style.display = "none";
    highscoresSection.style.display = "block"
}
startButton.onclick = startQuiz;

