/*
returns a random choice that is either
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
returns a choice made by user
*/
function getHumanChoice() { 
    return(prompt('Enter "rock", "paper" or "scissors":'));
}



/*
compares the humanChoice and computerChoice
and prints the result to the console
*/
function playRound(humanChoice, computerChoice) {
    printChoices(humanChoice, computerChoice);
    const humanSelection = humanChoice.toLowerCase();
    if (humanSelection === "rock") {
        if (computerChoice === "scissors") {
            console.log("%cYou Win! Rock beats Scissors", "font-size: 16px; font-weight: 900; color: green");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("%cYou Loose! Paper beats Rock", "font-size: 16px; font-weight: 900; color: red");
            computerScore++;
        }
        else console.log("%cIt's a tie", "font-size: 16px; font-weight: 900; color: orange");
    } else if (humanSelection === "paper") {
        if (computerChoice === "scissors") {
            console.log("%cYou Lose! Scissors beat Paper", "font-size: 16px; font-weight: 900; color: red");
            computerScore++;
        }
        else if (computerChoice === "rock") {
            console.log("%cYou Win! Paper beats Rock", "font-size: 16px; font-weight: 900; color: green");
            humanScore++;
        }
        else console.log("%cIt's a tie", "font-size: 16px; font-weight: 900; color: orange");
    } else if (humanSelection === "scissors") {
        if (computerChoice === "paper") {
            console.log("%cYou Win! Scissors beat Paper", "font-size: 16px; font-weight: 900; color: green");
            humanScore++;
        }
        else if (computerChoice === "rock") {
            console.log("%cYou Loose! Rock beats Scissors", "font-size: 16px; font-weight: 900; color: red");
            computerScore++;
        }
        else console.log("%cIt's a tie", "font-size: 16px; font-weight: 900; color: orange");
    } else console.log("%cYou entered wrong spelling!", "font-size: 16px; font-weight: 900; color: red")

}

function printChoices(humanSelection, computerSelection) {
    console.log(`You: ${humanSelection}\nComputer: ${computerSelection}\n\n`);
}

/*
executes 5 rounds of playRound and prints the overall results
*/
function playGame() {    
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) console.log("%c\n\nCongratulations!!! You Won!", "font-size: 24px; font-weight: 900; color: green");
    else if (humanScore < computerScore) console.log("%c\n\nYou Lost", "font-size: 24px; font-weight: 900; color: red");
    else console.log("%c\n\nIt's a tie", "font-size: 24px; font-weight: 900; color: orange");

    console.log(`\nYour Scores: ${humanScore}\nComputer's Scores: ${computerScore}`);
}

const playBtn = document.querySelector("#play");
const clearBtn = document.querySelector("#clear");


let humanScore = 0; 
let computerScore = 0;
playBtn.addEventListener("click", playGame);
clearBtn.addEventListener("click", function () {
    humanScore = 0;
    computerScore = 0;
    console.clear();
});
