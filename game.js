const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissor";

let getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSOR];

  const randomNumber = Math.floor(Math.random() * 2);

  return choices[randomNumber];
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    console.log("Tie!");
    return;
  }

  if (
    getGameStatus(
      playerSelection.toUpperCase(),
      computerSelection.toUpperCase()
    )
  ) {
    console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
};

let getGameStatus = (playerSelection, computerSelection) => {
  if (computerSelection === ROCK && playerSelection === PAPER) {
    return true;
  } else if (computerSelection === PAPER && playerSelection === SCISSOR) {
    return true;
  } else if (computerSelection == SCISSOR && playerSelection === ROCK) {
    return true;
  }

  return false;
};

function game() {
  playRound("Rock", "Paper");
  playRound("Paper", "Scissor");
  playRound("Scissor", "Scissor");
  playRound("Rock", "Paper");
  playRound("Rock", "Paper");
}

game();
