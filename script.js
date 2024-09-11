// Rock, Paper, Scissors game played in DevTools console

// Greet player
console.log("Greetings!\nWelcome to the game of Rock, Paper, Scissors!");
// Explain the rules
console.log("The rules are simple:\n" +
            "You will be playing prompted to make a choice: rock, paper, or scissors.\n" +
            "If your choice beats the choice of the computer, you win the round and get one point.\n" +
            "The first to get 3 points, wins the game!\n" +
            "Good luck!")
// Initialize computer's points counter and set it to zero
let computerScore = 0;
// Initialize player's points counter and set it to zero
let playerScore = 0;
// Initialize round number counter and set it to zero
let roundNumber = 0;
// Initialize computer's and player's choice variables as well as the switch for loop
let computerChoice, playerChoice, playerChoiceValid;

// Create a function to get computer's choice
function getComputerChoice() {
  // Get a random choice (1 out of 3)
  computerChoice = Math.floor(Math.random() * 3);
  // Convert the choice into text to present to player later
  // Assign computer's choice to the variable
  if (computerChoice === 0) {
    computerChoice = "Rock";
  } else if (computerChoice === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}
// getComputerChoice();
// console.log(playerChoiceValid, playerChoice, computerChoice);

// Create a function to get player's choice
function getPlayerChoice() {

  // Initialize variables to store patterns for player's input validation
  const rockPattern = /\brock/i;
  const paperPattern = /\bpaper/i;
  const scissorsPattern = /\bscissors/i;

  // Prompt player to input their choice and assign it to the variable
  playerChoice = prompt(`What is your choice for round ${roundNumber + 1}?`, "");

  // Validate the player's input, format it, and turn the switch on
  if (rockPattern.test(playerChoice)) {
    playerChoice = "Rock";
    playerChoiceValid = true;
  } else if (paperPattern.test(playerChoice)) {
    playerChoice = "Paper";
    playerChoiceValid = true;
  } else if (scissorsPattern.test(playerChoice)) {
    playerChoice = "Scissors";
    playerChoiceValid = true;
  } else {
    // If the input is invalid, show the notification
    alert("It seems, you made a mistake!\n" +
      "Please, input one of the following: rock, paper, scissors.");
    // and turn the switch off
    playerChoiceValid = false;
  }
  return playerChoiceValid, playerChoice;
}
// getPlayerChoice();
// console.log(playerChoiceValid, playerChoice, computerChoice);

// Create a function to compare choices
function compareChoices () {
  // If player chose *rock*, then
    // if computer chose *rock*, declare a tie
  // If player chose *paper*, then
    // if computer chose *rock*, declare player as the winner of the round...
      // ... increase player's score
    // if computer chose *paper*, declare a tie
    // if computer chose *scissors*, declare computer as the winner of the round...
      // ... increase computer's score
  // If player chose *scissors*, then
    // if computer chose *rock*, declare computer as the winner of the round...
      // ... increase computer's score
    // if computer chose *paper*, declare player as the winner of the round...
      // ... increase player's score
    // if computer chose *scissors*, declare a tie
}
// if computer's points are equal to 3, declare that player lost the game
// if player's points are equal to 3, declare that player won the game
// if no one has 3 points yet, play another round
