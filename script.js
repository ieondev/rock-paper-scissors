const options = ["rock", "paper", "scissors"];
let win = 0;
let lose = 0;
let tie = 0;
let valid = true;

console.log(game());

function computerPlay() {
    x = Math.floor(Math.random() * 3);
    return(options[x]);
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock": 
            console.log("You choose Rock.")
            switch(computerSelection) {
                case "rock":
                    console.log("The computer chooses Rock.");
                    console.log("It's a tie.");
                    tie++;
                    break;
                case "paper":
                    console.log("The computer chooses paper.");
                    console.log("You lose! Paper beats Rock.");
                    lose++;
                    break;
                case "scissors":
                    console.log("The computer chooses Scissors.");
                    console.log("You win! Rock beats Scissors.")
                    win++;
                    break;
            }
            break;
        case "paper":
            console.log("You choose Paper.")
            switch(computerSelection) {
                case "rock":
                    console.log("The computer chooses Rock.");
                    console.log("You win! Paper beats Rock.");
                    win++;
                    break;
                case "paper":
                    console.log("The computer chooses paper.");
                    console.log("It's a tie.");
                    tie++;
                    break;
                case "scissors":
                    console.log("The computer chooses Scissors.");
                    console.log("You lose! Scissors beat paper.")
                    lose++;
                    break;
            }
            break;
        case "scissors":
            console.log("You choose Scissors.")
            switch(computerSelection) {
                case "rock":
                    console.log("The computer chooses Rock.");
                    console.log("You lose! Rock beats Scissors.");
                    lose++;
                    break;
                case "paper":
                    console.log("The computer chooses paper.");
                    console.log("You win! Scissors beat Paper.");
                    win++;
                    break;
                case "scissors":
                    console.log("The computer chooses Scissors.");
                    console.log("It's a tie.")
                    tie++;
                    break;
            }
            break;
        default:
            valid = false;
            console.log("You can't do that! Try typing 'Rock', 'Paper', or 'Scissors'.");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1) + ":");
        let input = prompt("Rock, Paper, Scissors... Make your pick.");
        playerSelection = input.toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (!valid){
            i--;
            valid = true;
        }
     }

     console.log("...");
     if (win > lose) {
        console.log("You win the game!");
    } else
        console.log("You lose. Try again next time!")
}