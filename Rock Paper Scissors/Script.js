// JavaScript source code
// Create rock paper scissors game
// create a fuction that the coputer should return rock paper scissors at random
//
let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}
const selection = prompt("Please enter your choice. Ether Rock, Paper or Scissors")
const playerSelection = selection;
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You loose, Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "You draw";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win, Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "You draw";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win, Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You loose, Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win, Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You loose, Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "You draw";
    } else return "";
}
console.log(playRound(selection, getComputerChoice()));
const playerArray = [];
const computerArray = [];
function game() {
    if (playRound(playerSelection, computerSelection) === "You loose, Paper beats Rock") {
       return playerArray.push(0), computerArray.push(1);
    } else if (playRound(playerSelection, computerSelection) === "You draw") {
        return playerArray.push(1), computerArray.push(1);
    } else if (playRound(playerSelection, computerSelection) === "You win, Rock beats Scissors") {
        playerArray.push(1), computerArray.push(0);
    } else if (playRound(playerSelection, computerSelection) === "You win, Paper beats Rock") {
        return playerArray.push(1), computerArray.push(0);
    } else if (playRound(playerSelection, computerSelection) === "You loose, Scissors beats Paper") {
        return playerArray.push(0), computerArray.push(1);
    } else if (playRound(playerSelection, computerSelection) === "You loose, Rock beats Scissors") {
        return playerArray.push(0), computerArray.push(1);
    } else return "";
}
let i = 1
while (i < 5) {
    game();
    i++;
}
console.log(playerArray);
console.log(computerArray);
console.log(game());