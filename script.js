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
  const result = document.createElement('h2');
if (humanSelection === "rock") {
    if (computerChoice === "scissors") {
      result.className = 'win';
      result.textContent = "You Win! Rock beats Scissors";
    }
    else if (computerChoice === "paper") {
      result.className = 'lose';
      result.textContent = "You Lose! Paper beats Rock";
    }
    else {
      result.className = 'tie';
      result.textContent = "It's a tie";
    }
    output.appendChild(result);
    return 0;
} else if (humanSelection === "paper") {
    if (computerChoice === "scissors") {
      result.className = 'lose';
      result.textContent = 'You Lose! Scissors beat Paper';
    }
    else if (computerChoice === "rock") {
      result.className = 'win';
      result.textContent = 'You Win! Paper beats Rock';
    }
    else {
      result.className = 'tie';
      result.textContent = "It's a tie";
    }
    output.appendChild(result);
    return 0;
} else if (humanSelection === "scissors") {
    if (computerChoice === "paper") {
      result.className = 'win';
      result.textContent = 'You Win! Scissors beat Paper';
    }
    else if (computerChoice === "rock") {
      result.className = 'lose';
      result.textContent = 'You Loose! Rock beats Scissors';
    }
    else {
      result.className = 'tie';
      result.textContent = "It's a tie";
    }
    output.appendChild(result);
    return 0;
}

}

function printChoices(humanSelection, computerSelection) {
  output.innerHTML = ""; // clear previous results
  const humanChoice = document.createElement('h3');
  const computerChoice = document.createElement('h3');

  humanChoice.textContent = `You: ${humanSelection}`;
  output.appendChild(humanChoice);
  computerChoice.textContent = `Computer: ${computerSelection}`;
  output.appendChild(computerChoice);

}

/*
executes 5 rounds of playRound and prints the overall results
*/
function playGame() {    
  playRound(getHumanChoice(), getComputerChoice());
}

const choices = document.querySelector('.choices');
const output = document.querySelector('#output');

choices.addEventListener('click', e => {
  // finding the choice made by user through event bubbling
  const choice = e.target.id;
    switch (choice) {
      case 'rock':
        playRound("rock", getComputerChoice());
        break;
      case 'paper':
        playRound("paper", getComputerChoice());
        break;
      case 'scissors':
        playRound("scissors", getComputerChoice());
        break;
    }
});



