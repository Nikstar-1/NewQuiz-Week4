let questions = [
  {
    title: "Which is used for Connect To Database:",
    choices: ["PHP", "HTML", "JS", "All"],
    answer: "PHP"
  },
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
  {
    title: "How would you access the second element in an array?",
    choices:  ["nums[2]", "nums[1]","nums.1", "nums_1"],
    answer: "nums[1]",
  },
  {
    title: "Which is not a JavaScript Framework?:",
    choices: ["Python Script", "JQuery","Django", "NodeJS"],
    answer: "Django"
  },
  
];
var score = 0;
var currentIndex = 0;
var startScreen = document.getElementById("startScreen");
var startButton = document.getElementById("startQuizButton");

var questionsScreen = document.getElementById("questionsScreen");
var timer = document.getElementById("Timer");
questionsScreen.style.display = "none";
var questionsTitle = document.getElementById("questionToBeAsked");
var answersSection = document.getElementById("answers");
var resultSection = document.getElementById("result");
var highscoresSection = document.getElementById("highScoresScreens");
highscoresSection.style.display = "none"
var timeRemaining = 60
function startQuiz() {
  startScreen.style.display = "none";
  questionsScreen.style.display = "block";
  var countdown = setInterval(function () {
    timeRemaining--;
    timer.textContent = "Timer" + timeRemaining;

    if (timeRemaining === 0 || currentIndex === questions.length) {
        clearInterval(countdown);
        endQuiz();
    }
}, 1000);


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
    $("element").addClass("myStyle")
   
  });
}

function checkUsersAnswer() {
  var answerSelected = this.value;
  if (answerSelected === questions[currentIndex].answer) {
      score++;
      resultSection.innerHTML = "Correct";
  } else {
    timeRemaining = timeRemaining -10; 
    resultSection.innerHTML = "Incorrect";
    if (timeRemaining <= 0){
      clearInterval(countdown);
      endQuiz();
    }
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
    timeRemaining = 0;
}

function saveResults(){
    var playerName = $("input[name='playerName']").val();
    var previousResult = localStorage.getItem(playerName);
    localStorage.setItem(playerName,score);
    $(".previousScore").html(previousResult);
    $(".finalScore").html(score);

}

function restartQuiz(){
  highscoresSection.style.display = "none";
  startScreen.style.display = "block";
  
}



startButton.onclick = startQuiz;



//timer goes to all minus numbers and does not stop
//buttons need to be fixed so they are seperated



