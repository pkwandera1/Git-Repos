document.addEventListener('DOMContentLoaded', function () {
let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
return choice[Math.floor(Math.random() * choice.length)];
    }

let playerScore= 0;
let computerScore = 0;

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');
const plscore = document.querySelector('#plscore');
const coscore = document.querySelector('#coscore');

rockbtn.addEventListener('click', () => {
const playerSelection = "Rock"
const computerSelection = getComputerChoice();

if (computerSelection === playerSelection) {
console.log("You draw");
} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
playerScore++
    
console.log("You win"); 
console.log("Player " + playerScore);
console.log("Computer " + computerScore);
} else {
computerScore++;
console.log("You loose, Computer wins");
console.log("Player " + playerScore);
console.log("Computer " + computerScore);
}
    plscore.textContent = `Player Score ${playerScore}`
    coscore.textContent = `Computer Score  ${computerScore}`          
});

    

paperbtn.addEventListener('click', () => {
const playerSelection = "Paper"
const computerSelection = getComputerChoice();
if (computerSelection === playerSelection) {
console.log("You draw");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++
    console.log("You win"); 
    console.log("Player " + playerScore);
    console.log("Computer " + computerScore);
    } else {
    computerScore++;
    console.log("You loose, Computer wins");
    console.log("Player " + playerScore);
    console.log("Computer " + computerScore);
}

    plscore.textContent = `Player Score ${playerScore}`
    coscore.textContent = `Computer Score  ${computerScore}`
}); 

scissorsbtn.addEventListener('click', () => {
const playerSelection = "Scissors"
const computerSelection = getComputerChoice();
if (computerSelection === playerSelection) {
console.log("You draw");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++
    console.log("You win"); 
    console.log("Player " + playerScore);
    console.log("Computer " + computerScore);
    } else {
    computerScore++;
    console.log("You loose, Computer wins");
    console.log("Player " + playerScore);
    console.log("Computer " + computerScore);
}

    plscore.textContent = `Player Score ${playerScore}`
    coscore.textContent = `Computer Score  ${computerScore}`
});
});
    
