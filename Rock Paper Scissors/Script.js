// JavaScript source code
// Create rock paper scissors game
// create a fuction that the coputer should return rock paper scissors at random
//
let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

    let playerScore= 0;
    let computerScore = 0;
       for (let i = 0; i < 5; i++) {
        const playerSelection= prompt("Please enter your choice. (Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        console.log(`You chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
            if (computerSelection === playerSelection) {
                console.log("You draw");
            } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                    (playerSelection === "Scissors" && computerSelection === "Paper") ||
                    (playerSelection === "Paper" && computerSelection === "Rock")) {
                        playerScore++
                        console.log("You win"); 
                        console.log(playerScore);
                        console.log(computerScore);
                    } else {
                        computerScore++;
                        console.log("You loose, Computer wins");
                        console.log(playerScore);
                        console.log(computerScore);
                    }
       }
     if (computerScore < playerScore) {
        console.log("Great play! You won");
     } else if (computerScore > playerScore) {
        console.log("Oh no, You lost, Computer won");
     } else {
        console.log("You have a Draw");
            }
    
