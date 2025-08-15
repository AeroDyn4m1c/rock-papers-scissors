let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
  let cpuChoice = Math.floor(Math.random() * 3);

  if (cpuChoice === 0) {
    cpuChoice = "rock";
  } else if (cpuChoice === 1) {
    cpuChoice = "paper";
  } else {
    cpuChoice = "scissors";
  }

  return cpuChoice;
}

function getHumanChoice () {
  return pChoice = prompt("What do you want to use?").toLowerCase();
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return console.log("There is no winner! It's a draw!")
  }

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          computerScore++;
          return console.log("You lose! Paper beats Rock. The computer score is now " + computerScore);

        case "scissors":
          humanScore++;
          return console.log("You win! Rock beats Scissors. The human score is now " + humanScore);
      }

    case "paper":
      switch (computerChoice) {
        case "rock":
          humanScore++;
          return console.log("You win! Paper beats Rock. The human score is now " + humanScore);

        case "scissors":
          computerScore++;
          return console.log("You lose! Scissors beats Paper. The computer score is now " + computerScore);
      }

    case "scissors":
      switch (computerChoice) {
        case "paper":
          humanScore++;
          return console.log("You win! Scissors beats Paper. The human score is now " + humanScore);

        case "rock":
          computerScore++;
          return console.log("You lose! Rock beats Scissors. The computer score is now " + computerScore);
      }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();