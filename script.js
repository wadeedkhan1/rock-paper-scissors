let pPoint=0, cPoint=0, round=0;
let gameEnded = false;
const results = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const numberOfRounds = document.getElementById('rounds')

function getComputerChoice(){
    let num = Math.ceil(Math.random() * 3);
    if(num == 0)
        return "rock";
    else if (num == 1)
        return "paper";
    else if (num == 2)
        return "scissors";
    else 
        return getComputerChoice();
}

function playRound(playerSelection, computerSelection) {
    if(gameEnded) return;
    round++
    playerSelection = playerSelection.toLowerCase();
    

    if (playerSelection === computerSelection)
        results.textContent = "It's a Draw!!";
    else if (playerSelection === "rock" && computerSelection === "paper"){
        results.textContent = "You Lose! Paper beats Rock";
        cPoint++;}
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        results.textContent = "You Win! Rock beats Scissors";
        pPoint++}
    else if (playerSelection === "paper" && computerSelection === "rock"){
        results.textContent = "You Win! Paper beats Rock";
        pPoint++}
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        results.textContent = "You Lose! Scissors beats Paper";
        cPoint++;}
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        results.textContent = "You Lose! Rock beats Scissors";
        cPoint++;}
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        results.textContent = "You Win! Scissors beats Paper";
        pPoint++}
    
    if (pPoint === 5 || cPoint === 5) {
        gameEnded = true;
        if (pPoint === 5) {
            results.textContent = "Final Result: You Win!";} 
        else {
            results.textContent = "Final Result: You Lose!";}
    }
    
    playerScoreDisplay.textContent = pPoint;
    computerScoreDisplay.textContent = cPoint;
    numberOfRounds.textContent = round;
}

function resetGame() {
    pPoint = 0;
    cPoint = 0;
    round = 0;
    gameEnded = false;
    results.textContent = "";
    playerScoreDisplay.textContent = pPoint;
    computerScoreDisplay.textContent = cPoint;
    numberOfRounds.textContent = round;
}


