const playersChoice = prompt("What is you choice: Rock, Paper, Scissors");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissors";
}
