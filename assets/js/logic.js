//let currentQuestionIndex = 0;
let time = questions.length = 15;
let timerID;

//HTML elements;
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choiceElement = document.getElementById("choices");
let submitElement = document.getElementById("submit");
let startElement = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedbackElement = document.getElementById("feedback");

let sfx = new Audio("assets/sfx/correct.wav");

function questionClick() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time <0){
            time = 0;

            timerElement.textContent = time;

            feedbackElement.textContent = "Wrong"
        } else {
            sfxRight.play;
            feedbackElement.textContent = "Correct!";
        }
    }

    feedbackElement.setAttribute("class", "feedback");

    setTimeout(function() {
        feedbackElement.setAttribute("class", "feedback hide")

    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === questionClick.length)

}

function getQuestion(){
    let currentQuestion = questions(currentQuestionIndex);

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index)){
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = ${index + 1}: ${choice}

        choiceButton.addEventListener
    }    
}

function quizEnd(){
    clearInterval(timerID);

    let endScreenElement = document.getElementbyId("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementbyId("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide")

}

function clockTick(){
    time--;
    timerElement.textContent = time;

    if (time <= 0){
        quizEnd();
    }

}

function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute ("class", "hide");

    //try hiding this to see what happens
    questionsElement.removeAttribute ("class");
    
    timerID = setInterval(clockTick, 1000)
}

function saveHighScore(){
    let initials = initialElement.value.trim();
    console.log(initials);

    if(initials !==""){
        let highScore = JSON.parse(localStorage.getItem("highscores")) || []
        let newScore = {
            score: time,
            initials: initials;
        }
    }

    clearHighScores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highScores));

    window.location.href = "highscores.html";
}

function clickForEnter(event){
    if(event.key === "Enter") {
        saveHighScore();
    }
    
}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);