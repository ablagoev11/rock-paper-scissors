let score = 0;
let scoreComputer = 0;
const scoreElement = document.querySelector(".score");
const scoreComputerElement = document.querySelector(".computer-score");

function incrementScore(element, score) {
  ++score;
  element.textContent = `Score : ${score}`;
  return score;
}

const buttonsContainerElement = document.querySelector(".buttons");
const resultElement = document.querySelector(".result");
const computersChoiceElement = document.querySelector(".computer-choice");

buttonsContainerElement.addEventListener("click", chooseHand);

function chooseHand(e) {
  let target = e.target;
  let result = playRound(target.id, getComputerChoice());
  resultElement.textContent = result;
  if (result === "You WIN!") score = incrementScore(scoreElement, score);
  else if (result === "You LOSE!")
    scoreComputer = incrementScore(scoreComputerElement, scoreComputer);
  checkGameState();
}

function checkGameState() {
  if (score === 5 || scoreComputer === 5) {
    computersChoiceElement.textContent = "Game Over!";
    buttonsContainerElement.removeEventListener("click", chooseHand);
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissors";
}

function playRound(playersChoice, computersChoice) {
  computersChoiceElement.textContent = `Computer chooses ${computersChoice}`;
  switch (playersChoice) {
    case "Rock":
      if (computersChoice === "Paper") return "You LOSE!";
      else if (computersChoice === "Scissors") return "You WIN!";
      else return "DRAW";
      break;
    case "Paper":
      if (computersChoice === "Scissors") return "You LOSE!";
      else if (computersChoice === "Rock") return "You WIN!";
      else return "DRAW";
      break;
    case "Scissors":
      if (computersChoice === "Rock") return "You LOSE!";
      else if (computersChoice === "Paper") return "You WIN!";
      else return "DRAW";
      break;
    default:
      return "Invalid input";
  }
}
