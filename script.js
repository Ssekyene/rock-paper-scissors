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


/*** GLOBAL SCOPE OF THE GAME ****/
const choices = document.querySelector('#choices');
const output = document.querySelector('#output');
const startBtn = document.querySelector('#start');
const restartBtn = document.querySelector('#restart');
let humanScore = 0;
let computerScore = 0;
const result = document.createElement('h2');
const numberOfRounds = 5; // game is of 5 rounds
let roundCount = 0;
const rounds = document.querySelector('#rounds');
const continueBtn = document.querySelector('#continue');

startBtn.addEventListener('click', e => {
  // check if the control is either for
  // starting or stopping the game
  if (startBtn.textContent === 'STOP') {
    choices.style.display = 'none';
    continueBtn.classList.remove('hidden');
    displayWinner(humanScore, computerScore);

  } else {
    rounds.textContent = roundCount;
    humanScore = 0;
    computerScore = 0;
    rounds.classList.remove('hidden');
    choices.style.display = 'flex';
    startBtn.textContent = startBtn.textContent === "START" ? "STOP" : "START";

  }
});


restartBtn.addEventListener('click', e => {
  roundCount = 0;
  rounds.textContent = roundCount;
  restartBtn.classList.add('hidden');
  continueBtn.classList.add('hidden');
  startBtn.textContent = 'STOP';
  startBtn.classList.remove('hidden');
  choices.style.display = 'flex';
  humanScore = 0;
  computerScore = 0;
  output.innerHTML = ""; // clear previous results
});

continueBtn.addEventListener('click', e => {
  continueBtn.classList.add('hidden');
  restartBtn.classList.add('hidden');
  startBtn.classList.remove('hidden');
  choices.style.display = 'flex';

});
/**
  Listen for user input through clicks
 */

const children = Array.from(choices.children);

// loop through the children of choices
children.forEach(child => {
  child.addEventListener('click', e => {
    let score = 0;
    // make a count
    rounds.textContent = ++roundCount;
    const humanChoice = e.target.parentNode.id;
    output.innerHTML = ""; // clear previous results
    score = playRound(humanChoice, getComputerChoice());

    if (score === 1) {
      humanScore++;
      displayResult("You win!", 'win');
    } else if (score === -1) {
      computerScore++;
      displayResult("You lose!", 'lose');
    } else {
      displayResult("It's a tie!", 'tie');  
    
    }
    output.appendChild(result);
    getFinalResults();
  });
});
  


/***END GLOBAL SCOPE OF THE GAME ****/


function displayResult(msg, cls) {
  result.innerHTML = `
  <div class='${cls} msg'>${msg}</div>
  <div class="score">
  <span>Your score: ${humanScore}</span>
  <span>Computer score: ${computerScore}</span>
  </div>`;
}
    

function getFinalResults() {
  // check whether the rounds are done
  if (roundCount >= numberOfRounds) {
    displayWinner(humanScore, computerScore);
    return 0;
  }
  // check if one of the players has 3 scores and remaining rounds are 2 or less
  else if ((humanScore === 3 || computerScore === 3) && (numberOfRounds - roundCount) <= 2) {
    displayWinner(humanScore, computerScore);
    return 1;
  }
  // check if one of the players has 2 scores but not both
  // and one of the players has no score sofar yet remaining with 1 round
  else if (!(humanScore === 2 && computerScore === 2) &&
    (humanScore === 2 || computerScore === 2) &&
    (humanScore === 0 || computerScore === 0) &&
    (numberOfRounds - roundCount) === 1) {
      displayWinner(humanScore, computerScore);
      return 1;
    }
  else return -1;
}

function displayWinner(humanScore, computerScore) {
  restartBtn.classList.remove('hidden');
  startBtn.classList.add('hidden');
  choices.style.display = 'none';
  output.innerHTML = ''; // clear for final results display

  if (humanScore > computerScore) {
    displayResult("You win!", 'win');
  } else if (humanScore < computerScore) {
    displayResult("You lose!", 'lose');
  } else {
    displayResult("It's a tie!", 'tie');
  }

  output.appendChild(result);
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


/*
prints the choices made by user and computer
*/
function printChoices(humanSelection, computerSelection) {
  const humanChoice = document.createElement('h3');
  const computerChoice = document.createElement('h3');

  humanChoice.innerHTML = `You: <span class="${humanSelection}">${humanSelection}</span>`;
  computerChoice.innerHTML = `Computer: <span class="${computerSelection}">${computerSelection}</span>`;
  output.appendChild(humanChoice);
  output.appendChild(computerChoice);

}





