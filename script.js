let computerScore = 0;
let playerScore = 0;
let playerSelection, computerSelection;
let result = "";
const choice = ["rock", "paper", "scissors"];

const computerPlay = () => {
  return choice[~~(Math.random() * choice.length)];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return;
  }
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore += 1;
    if (playerScore == 5) {
      result = "Player Win";
      disableButton();
      buttonAgain.style.visibility = "visible"
    }
  } else {
    computerScore += 1;
    if (computerScore == 5) {
      result = "Computer Win";
      disableButton();
      buttonAgain.style.visibility = "visible"
    }
  }

  document.querySelector("#result").innerHTML = result;
};

const game = (player) => {
  playerSelection = player.value;
  computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  addScore(playerScore, computerScore);
};

const addScore = (playerScore, computerScore) => {
  document.querySelector("#player-score").innerHTML = `Player: ${playerScore}`;
  document.querySelector(
    "#computer-score"
  ).innerHTML = `Computer: ${computerScore}`;
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  result = "";
  document.querySelector("#player-score").innerHTML = `Player: 0`;
  document.querySelector("#computer-score").innerHTML = `Computer: 0`;
  document.querySelector("#result").innerHTML = result;
  enableButton()
};

const disableButton = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const enableButton = () => {
    buttons.forEach((button) => {
      button.disabled = false;
    });
  };
  

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.onclick = () => {
    game(button);
  };
});

const buttonAgain = document.querySelector(".button-again");
buttonAgain.style.visibility = "hidden"
buttonAgain.onclick = () => {
    resetGame()
}
