const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
let isPlayFirstTime = true;

let playerScore = 0;
let computerScore = 0;
const userScorePara = document.querySelector("#user-score");
userScorePara.style["text-align"];
userScorePara.style.cssText = "text-align: center;";

const computerScorePara = document.querySelector("#computer-score");
computerScorePara.style["text-align"];
computerScorePara.style.cssText = "text-align: center;";

const roundStatusPara = document.querySelector("#round-status");
roundStatusPara.style["text-align"];
roundStatusPara.style.cssText = "text-align: center;";

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value, getComputerChoice());
  });
});

let getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSOR];

  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

let playRound = (playerSelection, computerSelection) => {
  if (playerScore >= 5 || computerScore >= 5) {
    const buttons = document.querySelectorAll(".btn");
    removeEventListeners();
    return;
  }

  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    roundStatusPara.textContent = "Tie!";
    return;
  }

  if (
    getGameStatus(
      playerSelection.toUpperCase(),
      computerSelection.toUpperCase()
    )
  ) {
    roundStatusPara.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    roundStatusPara.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  userScorePara.textContent = playerScore;
  computerScorePara.textContent = computerScore;

  if (playerScore >= 5) {
    roundStatusPara.textContent = "You Won! Wanna play again Click Play Game";
  }

  if (computerScore >= 5) {
    roundStatusPara.textContent = "You Lose! Wanna play again Click Play Game";
  }

  if (playerScore >= 5 || computerScore >= 5) {
    const playGameBtn = document.querySelector("#play-game");
    playGameBtn.scrollIntoView();
    removeEventListeners();
  }
};

let getGameStatus = (playerSelection, computerSelection) => {
  if (playerSelection === PAPER && computerSelection === ROCK) {
    return true;
  } else if (playerSelection === SCISSOR && computerSelection === PAPER) {
    return true;
  } else if (playerSelection === ROCK && computerSelection == SCISSOR) {
    return true;
  }

  return false;
};

function removeEventListeners() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.removeEventListener("click", () => {
      return;
    });
  });
}

function play() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.disabled = false;
  });

  roundStatusPara.textContent = "";
  playerScore = 0;
  computerScore = 0;

  userScorePara.textContent = playerScore;
  computerScorePara.textContent = computerScore;
}
