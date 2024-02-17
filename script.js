function getcomputerSelection(){
    // returns a random string from the array.
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)].toLowerCase();
}

// For storing the players points.
let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection){
    // Compare the choices.
    if (playerSelection === computerSelection){
        playerPoints += 1;
        computerPoints += 1;
        return `It's a tie! Computer: ${computerSelection} - player: ${playerSelection}`;
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        computerPoints += 2; // the computer gains points.
        return `You loose! ${computerSelection} beats ${playerSelection} computer has ${computerPoints} points`;
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerPoints += 2; // the computer gains points.
        return `You loose! ${computerSelection} beats ${playerSelection} computer has ${computerPoints} points`;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerPoints += 2; // the computer gains points.
        return `You loose! ${computerSelection} beats ${playerSelection} computer has ${computerPoints} points`;
    }else{
        playerPoints += 2;
        return `You win! ${playerSelection} beats ${computerSelection} you have ${playerPoints} points`;
    }
}


function playGame(){
    
    computerPoints = 0;
    playerPoints = 0;

    let i = 1;
    while (i <= 5){
        const computerSelection = getcomputerSelection();
        const playerSelection = prompt("Choose! Rock Paper Scissors.").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        i++;
    }

    // Now for the results.
    
    if (playerPoints === computerPoints){ // Spoils Shared.
        console.log(`Overal, It's a tie. Computer ${computerPoints} - You ${playerPoints}`);
    }else{
        console.log(`Scores: Computer ${computerPoints} - You ${playerPoints}`);
    }
}

playGame();