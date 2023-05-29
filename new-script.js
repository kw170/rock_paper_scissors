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
        results.textContent = ("It is a Tie!");
        result = "";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        results.textContent = ("You Lose! Paper beats Rock")
        result = "computer"
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        results.textContent = ("You Win! Rock beats Scissors")
        result = "player"
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        results.textContent = ("You Lose! Scissors beats Paper")
        result = "computer"
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        results.textContent = ("You Win! Paper beats Rock")
        result = "player"
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        results.textContent = ("You Lose! Rock beats Scissors")
        result = "computer"

    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        results.textContent = ("You Win! Scissors beats Paper")
        result = "player"

    }
    return result;
}

//updates the score
function playerScoreUpdate(){
    if(result == "player"){
           return 1;
    }
    return 0;
}

function computerScoreUpdate(){
    if(result == "computer"){
           return 1;
    }
    return 0;
}


let result;
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const selections = document.querySelectorAll('.btn')
const results = document.querySelector('.results')
const score = document.querySelector('.score')



selections.forEach((button)=>{button.addEventListener('click', e => {
    playerSelection = button.getAttribute('id')
    computerSelection = getComputerChoice()
    result = playRound(playerSelection,computerSelection)
    playerScore += playerScoreUpdate(result)
    computerScore += computerScoreUpdate(result)
    score.textContent = playerScore + " - " + computerScore

    if(playerScore === 5){
        results.textContent = "You Won the Game! Congrats!"
        playerScore = 0
        computerScore = 0

    }
    else if(computerScore === 5){
        results.textContent = "You Lost the Game! Nice Try!"
        playerScore = 0
        computerScore = 0
    }
    })
})