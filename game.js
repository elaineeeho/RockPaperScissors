const userScore = 0;
const enemyScore = 0;
const userScore_span = document.getElementById("user-score");
const enemyScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".result");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const paper_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallComputerWord = "comp".fontsize(3);
    result_p.innerHTML = '${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord{(computerChoice)}${smallComputerWord}. You beat the Computer!';
}

function lose(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = '${convertToWord(userChoice)} beats ${convertToWord{(computerChoice)}. You beat the Computer!';
}

function draw(){
    console.log("This is a draw.");
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case"pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Tie.");
            break;
    }
}
function main(){
    rock_div.addEventListener('click', function() {
    game("r");

})

rock_div.addEventListener('click', function() {
    game("p");
    
})

rock_div.addEventListener('click', function() {
    game("s");
    
})

}

main();