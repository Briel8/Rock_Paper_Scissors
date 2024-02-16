function getComputerChoice(){
    // returns a random string from the array.
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

// For storing the players points.
let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();       // to make sure input data is the same.
    const computerChoice = computerSelection.toLowerCase();
    // Compare the choices.
    if (playerChoice === computerChoice){
        playerPoints += 1;
        computerPoints += 1;
        return `It's a tie! The computer has picked ${computerChoice} too.`;
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        computerPoints += 2; // the computer gains points.
        return `You loose! ${computerChoice} beats ${playerChoice}`;
    }else if(playerChoice === "paper" && computerChoice === "scissors"){
        computerPoints += 2; // the computer gains points.
        return `You loose! ${computerChoice} beats ${playerChoice}`;
    }else if(playerChoice === "scissors" && computerChoice === "rock"){
        computerPoints += 2; // the computer gains points.
        return `You loose! ${computerChoice} beats ${playerChoice}`;
    }else{
        playerPoints += 2;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = "paper";
function playGame(){
    for (let i = 0; i >= 5; i++){
        playRound(playerSelection, computerSelection);
    }
};