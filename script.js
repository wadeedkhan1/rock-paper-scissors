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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return "It's a Draw!!";
    else if (playerSelection === "rock" && computerSelection === "paper")
        return "You Lose! Paper beats Rock";
    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "You Win! Rock beats Scissors";
    else if (playerSelection === "paper" && computerSelection === "rock")
        return "You Win! Paper beats Rock";
    else if (playerSelection === "paper" && computerSelection === "scissors")
        return "You Lose! Scissors beats Paper";
    else if (playerSelection === "scissors" && computerSelection === "rock")
        return "You Lose! Rock beats Scissors";
    else if (playerSelection === "scissors" && computerSelection === "paper")
        return "You Win! Scissors beats Paper";
    else
        {console.log(playerSelection)
        console.log(computerSelection)
        return "Invalid selection. Please choose rock, paper, or scissors.";}
}


function playGame() {
    let cPoint = 0,
        pPoint = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        result = result.substring(4, 8);
        if (result === "Lose")
            cPoint++;
        else if (result === "Win!")
            pPoint++;
    }

    if (cPoint === pPoint)
        console.log("Final Result: Draw");
    else if (cPoint < pPoint)
        console.log("Final Result: You Win!");
    else if (cPoint > pPoint)
        console.log("Final Result: You Lose!");
}

playGame();