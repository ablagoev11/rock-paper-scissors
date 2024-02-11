for (let i = 1; i <= 5; i++) {
  const playersPrompt = prompt("What is you choice: Rock, Paper, Scissors");
  const playersChoice = processCaseSensitivity(playersPrompt);
  const computersChoice = getComputerChoice();
  alert(playRound(playersChoice, computersChoice));
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissors";
}

function playRound(playersChoice, computersChoice) {
  alert(`Computer chooses ${computersChoice}`);
  if (playersChoice === "Rock") {
    if (computersChoice === "Paper") return "You LOSE!";
    else if (computersChoice === "Scissors") return "You WIN!";
    else return "DRAW";
  } else if (playersChoice === "Paper") {
    if (computersChoice === "Scissors") return "You LOSE!";
    else if (computersChoice === "Rock") return "You WIN!";
    else return "DRAW";
  } else if (playersChoice === "Scissors") {
    if (computersChoice === "Rock") return "You LOSE!";
    else if (computersChoice === "Paper") return "You WIN!";
    else return "DRAW";
  } else return "Invalid input!";
}

function processCaseSensitivity(playersChoice) {
  return (
    playersChoice.charAt(0).toUpperCase() +
    playersChoice.slice(1, playersChoice.length).toLowerCase()
  );
}
