//function randomly generates computer choice
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    let choice;
    if(number == 0){
        choice = "rock";
    }
    else if (number == 1){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
}

//function prints outcome to console and result is determined
function playRound(playerSelection, computerSelection){
    let result;
    if(playerSelection == computerSelection){
        console.log("It is a Tie!");
        result = "";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock")
        result = "computer"
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors")
        result = "player"
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Scissors beats Paper")
        result = "computer"
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock")
        result = "player"
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors")
        result = "computer"

    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beats Paper")
        result = "player"

    }
    return result;
}

//function prompts user to pick choice
function ask(){
    let selection = (prompt("Chose Rock, Paper, or Scissors!")).toLowerCase();
    if(selection == "rock" || selection == "paper" || selection == "scissors"){
        return selection;
    }
    else{
        alert("Not a Valid Option, Pick Again");
    }
    ask();
}

//function starts the game
function game(){
    let computerScore = 0;
    let playerScore = 0;

//loop calls for 5 rounds
    for(let i = 0; i < 5; i++){
        let playerSelection = ask();
        let computerSelection = getComputerChoice();
        result = (playRound(playerSelection, computerSelection));

//updates the score
        if(result == "computer"){
            computerScore++;
        }
        else if(result == "player"){
            playerScore++;
        }

//prints final results to console
    }
    if(computerScore > playerScore){
        console.log("You Lost! " + computerScore + "-" + playerScore);
    }
    else if(computerScore < playerScore){
        console.log("You Won! " + playerScore + "-" + computerScore);
    }
    else if(computerScore == playerScore){
        console.log("You Tied! " + computerScore + "-" + playerScore);
    }
}




game();
