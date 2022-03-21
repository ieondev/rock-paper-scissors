const options = ["rock", "paper", "scissors"];
let round = 1;
let win = 0;
let lose = 0;
let tie = 0;
let text1 = "";
let text2 = "";
let text3 = "";
let results = ["", "", "", "", ""];

playGame();

function computerPlay() {
    x = Math.floor(Math.random() * 3);
    return (options[x]);
}

function playRound(playerSelection, computerSelection) {
    if (round > 5) {
        return;
    }
    switch (playerSelection) {
        case "rock":
            text1 = "You chose Rock. ";
            switch (computerSelection) {
                case "rock":
                    text2 = "The computer chooses Rock. It's a tie."
                    tie++;
                    break;
                case "paper":
                    text2 = ("The computer chooses paper. You lose! Paper beats Rock.");
                    lose++;
                    break;
                case "scissors":
                    text2 = ("The computer chooses Scissors. You win! Rock beats Scissors.");
                    win++;
                    break;
            }
            break;
        case "paper":
            text1 = "You chose Paper. ";
            switch (computerSelection) {
                case "rock":
                    text2 = ("The computer chooses Rock. You win! Paper beats Rock.");
                    win++;
                    break;
                case "paper":
                    text2 = ("The computer chooses paper. It's a tie.");
                    tie++;
                    break;
                case "scissors":
                    text2 = ("The computer chooses Scissors. You lose! Scissors beat paper.");
                    lose++;
                    break;
            }
            break;
        case "scissors":
            text1 = "You chose Scissors. ";
            switch (computerSelection) {
                case "rock":
                    text2 = ("The computer chooses Rock. You lose! Rock beats Scissors.");
                    lose++;
                    break;
                case "paper":
                    text2 = ("The computer chooses paper. You win! Scissors beat Paper.");
                    win++;
                    break;
                case "scissors":
                    text2 = ("The computer chooses Scissors. It's a tie.");
                    tie++;
                    break;
            }
            break;
    }
    round++;
    results[round-2] = text1 + text2;
    getResults();
}

function playGame() {
    document.getElementById("rock").addEventListener("click", function(){
        playRound("rock", computerPlay());
    }); 
    document.getElementById("paper").addEventListener("click", function(){
        playRound("paper", computerPlay());
    }); 
    document.getElementById("scissors").addEventListener("click", function(){
        playRound("scissors", computerPlay());
    }); 
    document.getElementById("reset").addEventListener("click", function(){
        reset();
    }); 
}

function getResults() {
    document.getElementById("results").innerHTML = 
        results[0] + "<br />" +
        results[1] + "<br />" + 
        results[2] + "<br />" + 
        results[3] + "<br />" +
        results[4] + "<br />";
    
    if (win > lose) {
        text3 = "You win the game!";
    } else if (win < lose) {
        text3 = "You lose. Try again next time!";
    } else if (win == lose) {
        text3 = "It's a complete tie!";
    }

    if(round > 5){
        document.getElementById("final").innerHTML = 
        "<br /> Your Score: " + win + "<br />" + (" Computer's Score: " + lose + "<br />" + text3);
    } else {
        document.getElementById("final").innerHTML = "";
    }

}

function reset() {
    win = 0;
    lose = 0;
    tie = 0;
    round = 1;
    results = ["", "", "", "", ""];
    getResults();
}