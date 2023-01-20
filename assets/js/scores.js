function printHighScores(){
    let highscore = JSON.parse(localStorage.getItem("hightscores"))  || []
    clearHighScores.sort(function(a,b){

    })

    clearHighScores.forEach(function(score)) (
        let li = document.createElement("li");
        li.textContent = ${score.initials} - ${score.score}

        let ol = document.getElementbyId()
    )

}

function clearHighScores(){
    localStorage.removeItem("highscore");
    window.location.reload();
 
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);

document.getElementById("clear").onClick = clearHighScores;

printHighScores();