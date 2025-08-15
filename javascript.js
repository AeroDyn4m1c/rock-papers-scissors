const humanScore = 0;
const computerScore = 0;

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
  
}