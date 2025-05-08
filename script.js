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



const choices = document.querySelector('.choices');
const output = document.querySelector('#output');

let humanScore = 0;
let computerScore = 0;

choices.addEventListener('click', e => {
  // finding the choice made by user through event bubbling
  const humanChoice = e.target.id;
  let score = 0;
  const result = document.createElement('h2');

  output.innerHTML = ""; // clear previous results
  score = playRound(humanChoice, getComputerChoice());
  if (score === 1) {
    humanScore++;
    result.innerHTML = `You win! Your score: ${humanScore} Computer score: ${computerScore}`;
  } else if (score === -1) {
    computerScore++;
    result.innerHTML = `You lose! Your score: ${humanScore} Computer score: ${computerScore}`;
  } else {
    result.innerHTML = `It's a tie! Your score: ${humanScore} Computer score: ${computerScore}`;  
  
  }
  output.appendChild(result);
});
/*
returns a choice made by user
*/
function getHumanChoice(choice) { 
  return choice;
}



/*
compares the humanChoice and computerChoice
and returns 1 if human wins, -1 if computer wins
and 0 if it's a tie
*/
function playRound(humanChoice, computerChoice) {
  printChoices(humanChoice, computerChoice);
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      return 1;
    }
    else if (computerChoice === "paper") {
      return -1;
    }
    else {
      return 0;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      return -1;
    }
    else if (computerChoice === "rock") {
      return 1;
    }
    else {
      return 0;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      return 1;
    }
    else if (computerChoice === "rock") {
      return -1;
    }
    else {
      return 0;
    }
  }

}

function printChoices(humanSelection, computerSelection) {
  const humanChoice = document.createElement('h3');
  const computerChoice = document.createElement('h3');

  humanChoice.textContent = `You: ${humanSelection}`;
  computerChoice.textContent = `Computer: ${computerSelection}`;
  output.appendChild(humanChoice);
  output.appendChild(computerChoice);

}





