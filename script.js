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
const choices = document.querySelector('.choices');
const output = document.querySelector('#output');
const startBtn = document.querySelector('#start');
const restartBtn = document.querySelector('#restart');
let humanScore = 0;
let computerScore = 0;
const result = document.createElement('h2');
const numberOfRounds = 5; // game is of 5 rounds
let roundCount = 0;
const rounds = document.querySelector('#rounds');

startBtn.addEventListener('click', e => {
  if (startBtn.textContent === 'STOP') {
    choices.style.display = 'none';
    rounds.classList.add('hidden');
    displayWinner(humanScore, computerScore);

  }
  rounds.textContent = roundCount;
  humanScore = 0;
  computerScore = 0;
  rounds.classList.remove('hidden');
  choices.classList.toggle('hidden');
  startBtn.textContent = startBtn.textContent === "START" ? "STOP" : "START";
});


restartBtn.addEventListener('click', e => {
  roundCount = 0;
  rounds.textContent = roundCount;
  restartBtn.classList.add('hidden');
  startBtn.textContent = 'STOP';
  startBtn.classList.remove('hidden');
  choices.classList.remove('hidden');
  choices.style.display = '';
  humanScore = 0;
  computerScore = 0;
  output.innerHTML = ""; // clear previous results
});

/**
  Listen for user input through clicks
 */
choices.addEventListener('click', e => {
  // finding the choice made by user through event bubbling
  const humanChoice = e.target.id;
  let score = 0;

  // check if the user clicked on a valid choice
  if(humanChoice) {
    rounds.textContent = ++roundCount;
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
  }

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
  choices.classList.add('hidden');
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





