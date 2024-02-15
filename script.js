function getComputerChoice(){
    // returns a random string from the array.
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();       // to make sure input data is the same.
    const computerChoice = computerSelection.toLowerCase();
    // Compare the choices.
    if (playerChoice === computerChoice){
        return `It's a tie! The computer has picked ${computerChoice} too.`;
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        return `You loose! ${computerChoice} beats ${playerChoice}`;
    }else if(playerChoice === "paper" && computerChoice === "scissors"){
        return `You loose! ${computerChoice} beats ${playerChoice}`;
    }else if(playerChoice === "scissors" && computerChoice === "rock"){
        return `You loose! ${computerChoice} beats ${playerChoice}`;
    }else{
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = "paper";
console.log(playRound(playerSelection, computerSelection));