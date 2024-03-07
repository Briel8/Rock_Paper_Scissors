let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

function getcomputerSelection(){
    // returns a random string from the array.
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)].toLowerCase();
}


function playRound(playerSelection, computerSelection){
    
    // Compare the choices.
    if (playerSelection === computerSelection){
        playerScore += 1;
        computerScore += 1;
        return `It's a tie! Computer: ${computerSelection} - player: ${playerSelection}`;
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore += 1;
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore += 1;
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore += 1;
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }else{
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function keepScores(rounds){
    if (playerScore >= rounds || computerScore >= rounds){
        resultDiv.textContent = `Player ${playerScore} : Computer ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}

const body = document.querySelector('body');
const resultDiv = document.querySelector('.resultDiv');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        playerSelection = button.id;
        computerSelection = getcomputerSelection();
        resultDiv.textContent = playRound(playerSelection, computerSelection);
        keepScores(5);

        body.appendChild(resultDiv);

    });
});

