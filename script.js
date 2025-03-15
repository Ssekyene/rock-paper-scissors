/*
a function that returns a random choice that is either
rock, paper or scissors
*/
function getComputerChoice() {
    // returns a number between 0(inclusive), 1 and 2 inclusive
    const choice =  Math.floor((Math.random() * 3));
    if (choice === 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scisscors";
}

// console.log(getComputerChoice());

function getHumanChoice() {
    const input = prompt('Enter "rock", "paper" or "scissors":');
    return input.toLowerCase();
    
}

// console.log(getHumanChoice());