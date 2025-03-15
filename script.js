const humanScore = 0;
const computerScore = 0;

/*
a function that returns a random choice that is either
rock, paper or scissors
*/
function getComputerChoice() {
    // returns a number between 0(inclusive), 1 and 2 inclusive
    const choice =  Math.floor((Math.random() * 3));
    if (choice === 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}


/*
a function that returns a choice made by user
*/
function getHumanChoice() {
    return(prompt('Enter "rock", "paper" or "scissors":'));
    }

/*
a function that runs round comparing the humanChoice and computerChoice
and prints the result to the console
*/
function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase();
    if (humanSelection === "rock") {
        if (computerChoice === "scissors") console.log("%cYou Win! Rock beats Scissors", "font-size: 16px; font-weight: 900; color: green");
        else if (computerChoice === "paper") console.log("%cYou Loose! Paper beats Rock", "font-size: 16px; font-weight: 900; color: red");
        else console.log("%cIt's a tie", "font-size: 16px; font-weight: 900; color: orange");
    } else if (humanSelection === "paper") {
        if (computerChoice === "scissors") console.log("%cYou Lose! Scissors beat Paper", "font-size: 16px; font-weight: 900; color: red");
        else if (computerChoice === "rock") console.log("%cYou Win! Paper beats Rock", "font-size: 16px; font-weight: 900; color: green");
        else console.log("%cIt's a tie", "font-size: 16px; font-weight: 900; color: orange");
    } else if (humanSelection === "scissors") {
        if (computerChoice === "paper") console.log("%cYou Win! Scissors beat Paper", "font-size: 16px; font-weight: 900; color: green");
        else if (computerChoice === "rock") console.log("%cYou Loose! Rock beats Scissors", "font-size: 16px; font-weight: 900; color: red");
        else console.log("%cIt's a tie", "font-size: 16px; font-weight: 900; color: orange");
    } else console.log("%cYou entered wrong spelling!", "font-size: 16px; font-weight: 900; color: red")

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`You: ${humanSelection}\nComputer: ${computerSelection}\n\n`);

playRound(humanSelection, computerSelection);