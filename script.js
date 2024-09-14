// Rock, Paper, Scissors game played in DevTools console

// Initialize computer's points counter and set it to zero
let computerScore = 0;
// Initialize player's points counter and set it to zero
let playerScore = 0;
// Initialize round number counter and set it to zero
let roundNumber = 0;
// Initialize computer and player's choice variables
let computerChoice, playerChoice;
// Initialize a variable to store the result of a round
let roundResult;
// Initialize a switch variable to start/end the game
let gameOn;
// Greet player
console.log(`Greetings!\nWelcome to the game of Rock, Paper, Scissors!`);
// Explain the rules
console.log(`The rules are simple:\n` +
            `You will be prompted to make a choice: rock, paper, or scissors.\n` +
            `If your choice beats the choice of the computer, you win the round and get one point.\n` +
            `The first to get 3 points, wins the game!\n` +
            `Good luck!`
          );
playGame();

// Create a function to play the game (best of 5 rounds)
function playGame() {
  // Turn the switch on
  gameOn = true;
  while (gameOn) {
    playRound();
    // Nullify player's choice after every round
    playerChoice = undefined;
  }
  // If the player does not press Cancel
  if (playerChoice !== null) {
    // Show the winner and the results of the game
    showWinner();
  }
}

// Create a function to play one round
function playRound() {
  roundResult = 0;
  // While player's choice is invalid
  while (!isPlayerChoiceValid()) {
    // Keep trying to get player's input
    getPlayerChoice();
    // But if the player presses Cancel at any point
    if (playerChoice === null) {
      // Turn the game switch off
      gameOn = false;
      // Exit the loop and the function
      break;
    }
  }
  // if player didn't press cancel
  if (playerChoice !== null) {
    // Present round number
    console.log(`--- Round ${roundNumber + 1} ---`);
    // Get computer choice
    getComputerChoice();
    // Get player's choice
    compareChoices(playerChoice, computerChoice);
    // Show the result
    showResult(roundNumber, playerChoice, playerScore, computerChoice, computerScore);
    // Increase round counter
    ++roundNumber;
    // When anyone's score reaches 3 points
    if (playerScore === 3 || computerScore === 3) {
      // Turn the game switch off
      gameOn = false;
    }
  }
}

// Create a function to get player's choice
function getPlayerChoice() {
  // Prompt player to input their choice and assign it to the variable
  playerChoice = prompt(`What is your choice for round ${roundNumber + 1}?`, ``);
  // Did player press Cancel?
  if (checkCancel() === false) {
    if (isPlayerChoiceValid()) {
      return playerChoice;
    // If player's choice is invalid
    } else {
      // Show the alert
      alert(`It seems you have made a mistake!\n` +
        `Please, input one of the following: rock, paper, scissors.`
      );
    }
  // If player pressed Cancel, exit the function
  } else {
    return;
  }
}

// Create a function to check if player pressed Cancel in the prompt
function checkCancel() {
  // If player pressed Cancel
  if (playerChoice === null) {
    // Show message
    console.log(`The game has been canceled!`);
    gameOn = false;
    return true;
  } else {
    return false;
  }
}

// Create a function to validate player's input
function isPlayerChoiceValid() {
  // Initialize variables to store patterns for player's input validation
  const rockPattern = /^rock$/i;
  const paperPattern = /^paper$/i;
  const scissorsPattern = /^scissors$/i;
  // If player's input fits one of the patterns
  if (rockPattern.test(playerChoice)) {
    playerChoice = `Rock`;
    // return that player's choice is valid
    return true;
  } else if (paperPattern.test(playerChoice)) {
    playerChoice = `Paper`;
    return true;
  } else if (scissorsPattern.test(playerChoice)) {
    playerChoice = `Scissors`;
    return true;
  // If player's input does not fit any of the patterns
  } else {
    // return that player's choice is invalid
    return false;
  }
}

// Create a function to get computer's choice
function getComputerChoice() {
  // Get a random choice (1 out of 3)
  computerChoice = Math.floor(Math.random() * 3);
  // Convert the choice into readable text to present to player later
  if (computerChoice === 0) {
    computerChoice = `Rock`;
  } else if (computerChoice === 1) {
    computerChoice = `Paper`;
  } else {
    computerChoice = `Scissors`;
  }
  return computerChoice;
}

// Create a function to compare choices
function compareChoices(playerChoice, computerChoice) {
  // If player wins
  if ((playerChoice === "Rock" && computerChoice === "Scissors")
    || (playerChoice === "Paper" && computerChoice === "Rock")
    || (playerChoice === "Scissors" && computerChoice === "Paper")) {
    // increase player's score
    ++playerScore;
    roundResult = 1;
  // If player loses
  } else if ((playerChoice === "Rock" && computerChoice === "Paper")
    || (playerChoice === "Paper" && computerChoice === "Scissors")
    || (playerChoice === "Scissors" && computerChoice === "Rock")) {
    // increase computer's score
    ++computerScore;
    roundResult = -1;
  }
  return playerScore, computerScore;
}

// Create a function to show the result of a round and show corresponding message
function showResult(roundNumber, playerChoice, playerScore, computerChoice, computerScore) {
  if (roundResult === 0) {
    return console.log(`It is a tie!\n` +
      `${playerChoice} doesn't beat ${computerChoice}.\n` +
      `End of round ${roundNumber + 1}`
    );
  }
  if (roundResult === 1) {
    return console.log(`You win!\n` +
      `${playerChoice} beats ${computerChoice}.\n` +
      `End of round ${roundNumber + 1}`
    );
  }
  if (roundResult === -1) {
    return console.log(`You lose!\n` +
      `${computerChoice} beats ${playerChoice}.\n` +
      `End of round ${roundNumber + 1}`);
  }
}

// Create a function to show the winner and the final result
function showWinner() {
  // Show the appropriate message about the outcome of the game
  if (playerScore === 3) {
    console.log(`\nCongratulations! You win after ${roundNumber} rounds!\n `);
  } else if (computerScore === 3) {
    console.log(`\nUnfortunately, you lose after ${roundNumber} rounds.\n `);
  }
  // Show the final score of game
  console.log(`\nFINAL SCORE\n` +
    `-----------\n` + 
    `You:      ${playerScore}\n` +
    `Computer: ${computerScore}\n` +
    `-----------\n\n` + 
    `Thank you for playing!`
  );
  return;
}