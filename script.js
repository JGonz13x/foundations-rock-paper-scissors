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

console.log(getComputerChoice());
