function printHighScores(){
    
    let highScores = JSON.parse(localStorage.getItem("hightscores"))  || [];

    highScores.sort(function(a,b){
        return b.score - a.score;


    })

    highScores.forEach(function(score){
        let li = document.createElement("li");
        li.textContent = `${score.initials} - ${score.score}`

        let ol = document.getElementbyID("highScores");
        ol.appendChild(li);
    })
    

}
    
function clearHighScores(){
    localStorage.removeItem("highscore");
    window.location.reload();
 
}





let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);

//document.getElementById("clear").onClick = clearHighScores;

printHighScores();