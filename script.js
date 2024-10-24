let computerScore = 0;
let playerScore = 0;
let roundWinner = "";

getPlayerChoice();

function getComputerChoice() {
  const computerChoice = Math.random();

  if (computerChoice > 0 && computerChoice <= 1 / 3) {
    return "Rock";
  } else if (computerChoice > 1 / 3 && computerChoice <= 2 / 3) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getPlayerChoice() {
  const rockElement = document.querySelector(".rock");
  const paperElement = document.querySelector(".paper");
  const scissorElement = document.querySelector(".scissor");

  rockElement.addEventListener("click", () => {
    playRound("Rock");
    playGame();
  });
  paperElement.addEventListener("click", () => {
    playRound("Paper");
    playGame();
  });
  scissorElement.addEventListener("click", () => {
    playRound("Scissor");
    playGame();
  });
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === "Rock" && computerChoice === "Paper") {
    roundWinner = "Computer Wins!";
    computerScore++;
  } else if (playerChoice === "Rock" && computerChoice === "Scissor") {
    roundWinner = "Player Wins";
    playerScore++;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    roundWinner = "Player Wins";
    playerScore++;
  } else if (playerChoice === "Paper" && computerChoice === "Scissor") {
    roundWinner = "Computer Wins!";
    computerScore++;
  } else if (playerChoice === "Scissor" && computerChoice === "Rock") {
    roundWinner = "Computer Wins!";
    computerScore++;
  } else if (playerChoice === "Scissor" && computerChoice === "Paper") {
    roundWinner = "Player Wins";
    playerScore++;
  } else {
    roundWinner = "Draw!";
  }
  document.querySelector(
    ".score"
  ).innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

document.querySelector(
  ".score"
).innerHTML = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

function playGame() {
  if (playerScore > computerScore && playerScore === 5) {
    document.querySelector(".winner").innerHTML = roundWinner;
    playerScore = 0;
    computerScore = 0;
  } else if (playerScore < computerScore && computerScore === 5) {
    document.querySelector(".winner").innerHTML = roundWinner;
    playerScore = 0;
    computerScore = 0;
  } else {
    document.querySelector(".winner").innerHTML = "";
  }
}
