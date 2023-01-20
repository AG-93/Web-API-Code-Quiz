function printHighScores(){
 //TODO
}

function clearHighScores(){
 //TODO
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);

document.getElementById("clear").onClick = clearHighScores;

printHighScores();