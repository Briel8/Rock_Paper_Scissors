function getComputerChoice(){
    // returns a random string from the array.
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}