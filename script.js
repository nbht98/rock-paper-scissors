let computerScore = 0;
let playerScore = 0;
let playerSelection, computerSelection;
let result = "";
const choice = ["rock", "paper", "scissors"];

const computerPlay = () => {
  return choice[~~(Math.random() * choice.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    addResult("tie");
    return;
  }
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore += 1;
    addResult("win");
    if (playerScore == 5) {
      result = "You Beat Computer";
      md.classList.add("md-show");
      // buttonAgain.style.visibility = "visible";
    }
  } else {
    computerScore += 1;
    addResult("lose");
    if (computerScore == 5) {
      result = "Computer Beat You";
      md.classList.add("md-show");
      // buttonAgain.style.visibility = "visible";
    }
  }

  document.querySelector("#result").innerHTML = result;
};

const game = (player) => {
  playerSelection = player.getAttribute("value");
  computerSelection = computerPlay();
  document.querySelector("#player-image").src = `images/${playerSelection}.png`;
  document.querySelector(
    "#computer-image"
  ).src = `images/${computerSelection}.png`;
  image[0].style.visibility = "visible";
  image[1].style.visibility = "visible";

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
  md.classList.remove("md-show");
  resultShow.style.visibility = "hidden";
  image[0].style.visibility = "hidden";
  image[1].style.visibility = "hidden";
  playerScore = 0;
  computerScore = 0;
  result = "";
  document.querySelector("#player-score").innerHTML = `Player: 0`;
  document.querySelector("#computer-score").innerHTML = `Computer: 0`;
  document.querySelector("#result").innerHTML = result;
};

const addResult = (result) => {
  resultShow.style.visibility = "visible";
  switch (result) {
    case "win":
      resultShow.innerHTML = "You win!";
      resultShow.className = `text animated wobble`;
      return;
    case "lose":
      resultShow.innerHTML = "You lost!";
      resultShow.className = `text animated hinge`;
      return;
    case "tie":
      resultShow.innerHTML = "Tie game!";
      resultShow.className = `text animated pulse`;
      return;
  }
};

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.onclick = () => {
    game(button);
  };
});

const buttonAgain = document.querySelector(".md-close");
const image = document.querySelectorAll(".image");
const resultShow = document.querySelector("#result-show");

image[0].style.visibility = "hidden";
image[1].style.visibility = "hidden";

// buttonAgain.style.visibility = "hidden";
resultShow.style.visibility = "hidden";

buttonAgain.onclick = () => {
  resetGame();
};

const md = document.querySelector(".md-modal");
