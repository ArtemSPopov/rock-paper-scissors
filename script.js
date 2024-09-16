//
// Rock, Paper, Scissors game in DevTools console
//
// Constraints:
// - the entire game is played in the console,
//   with the only interaction being user's input;
// - manual input from the user;
// - user's input can be case-insensitive;
// - computer's choice is random.
// 
// Features:
// - the game is played in the Best of Five format
//   (first to get 3 points, wins);
// - "Cancel" button of the prompt is fully
//   grated and ends the game at any point,
//   presenting the results thus far;
// - user's input is validated against a Regular
//   Expression, and in the case of wrong input,
//   the user is prompted to repeat the input;
// - the score after each round as well as after
//   the game is presented to the user;
// - almost all outputs in the console are styled.
// 
// Created by Artem Popov


// Initialize variables to store 
let playerChoice,       // player's choice in string
    computerChoice,     // computer's choice
    playerScore = 0,    // player's score
    computerScore = 0,  // computer's score
    roundNumber = 0,    // round number
    roundResult,        // result of a round (0 - tie, 1 - win, -1 - lose)
    gameOn;             // status of the game

// Greet player
console.log(`%cGreetings!\nWelcome to the game of Rock, Paper, Scissors!`,
  `font-style: italic; font-size: 14px; line-height: 200%`
);
// Explain the rules
console.log(`%cThe rules are simple:\n` +
            `You will be prompted to make a choice: rock, paper, or scissors.\n` +
            `If your choice beats the choice of the computer, you win the round and get one point.\n` +
            `The first to get 3 points, wins the game!\n` +
            `Good luck!`,
            `line-height: 150%`
);
// Initiate the game
playGame();

// Function to play the game
function playGame() {
  // Turn the switch on
  gameOn = true;
  while (gameOn) {
    playRound();
    // Nullify player's choice after every round
    playerChoice = undefined;
  }
  // After the game switch is off
  // show the winner and the result of the game
  showWinner();
}

// Function to play one round
function playRound() {
  // Set the default round result as a tie (0)
  roundResult = 0;
  // While player's choice is invalid
  while (!isPlayerChoiceValid()) {
    // Keep trying to get player's input
    getPlayerChoice();
    // But if player presses Cancel at any point
    if (playerChoice === null) {
      // Turn the game switch off
      gameOn = false;
      // Exit the loop and the function
      break;
    }
  }
  // If player didn't press cancel
  if (playerChoice !== null) {
    // Get computer choice
    getComputerChoice();
    // Get player's choice
    compareChoices();
    // Present round number
    console.group(`--- Round ${roundNumber + 1} ---`);
    // Show the result
    showResult();
    console.groupEnd();
    // Increase round counter
    ++roundNumber;
    // When anyone's score reaches 3 points
    if (playerScore === 3 || computerScore === 3) {
      // Turn the game switch off
      gameOn = false;
    }
  }
}

// Function to get player's choice
function getPlayerChoice() {
  // Prompt player to input their choice and store it in the variable
  playerChoice = prompt(`What is your choice for round ${roundNumber + 1}?`, ``);
  // If player pressed Cancel, exit the function
  if (checkCancel()) {
    return;
  // If player didn't press Cancel
  } else {
    // Make sure their input is valid (fits the RegEx pattern)
    if (isPlayerChoiceValid()) {
      return playerChoice;
    // If player's input is invalid
    } else {
      // Show the alert
      alert(`It seems you have made a mistake!\n` +
        `Please, input one of the following: rock, paper, scissors.`
      );
      // After this, the program prompts the use
      // to input their choice again,
      // because isPlayerChoiceValid is still false
    }
  }
}

// Function to check if player pressed Cancel
// when prompted to input their choice
function checkCancel() {
  // If player pressed Cancel
  if (playerChoice === null) {
    // Show message
    console.log(`%cThe game has been canceled!`, `font-size: 14px; font-style: italic`);
    // Turn the game switch off
    gameOn = false;
    return true;
  } else {
    return false;
  }
}

// Function to validate player's input
function isPlayerChoiceValid() {
  // Initialize constant variables to store
  // patterns to validate player's input against.
  const rockPattern = /^rock$/i;              // Expressions match strings only containing
  const paperPattern = /^paper$/i;            // words "rock", "paper", and "scissors",
  const scissorsPattern = /^scissors$/i;      // without any symbols after, ignoring case
  // If player's input is tested positively
  // against one of the expressions
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
  // If player's input does not match
  // any of the expressions
  } else {
    // return that player's choice is invalid
    return false;
  }
}

// Function to get computer's choice
function getComputerChoice() {
  // Get a random choice (0, 1 or 2)
  computerChoice = Math.floor(Math.random() * 3);
  // Convert the choice into presentable text
  (computerChoice === 0) ? computerChoice = `Rock`:
  (computerChoice === 1) ? computerChoice = `Paper`:
  computerChoice = `Scissors`;
}

// Function to compare choices
function compareChoices() {
  // If player wins
  if ((playerChoice === "Rock" && computerChoice === "Scissors")
    || (playerChoice === "Paper" && computerChoice === "Rock")
    || (playerChoice === "Scissors" && computerChoice === "Paper")) {
    // increase player's score
    ++playerScore;
    // Assign the round result as win (1)
    roundResult = 1;
  // If player loses
  } else if ((playerChoice === "Rock" && computerChoice === "Paper")
    || (playerChoice === "Paper" && computerChoice === "Scissors")
    || (playerChoice === "Scissors" && computerChoice === "Rock")) {
    // increase computer's score
    ++computerScore;
    // Assign the round result as a loss (-1)
    roundResult = -1;
  }
}

// Function to show the result of a round
// and the corresponding message
function showResult() {
  // If the round result is a tie
  if (roundResult === 0) {
    console.log(`Your choice         ${playerChoice}\n` +
      `Computer's choice   ${computerChoice}\n` +
      `%cIt is a tie!\n` +
      `%cCurrent score\n` +
      `%c-------------\n` +
      `%cYou         ${playerScore}\n` +
      `%cComputer    ${computerScore}\n` +
      `%c-------------\n` +
      `%cEnd of round ${roundNumber + 1}`,
      `font-size: 14px; margin-top: 10px; color: #FFFFE0`,
      `margin-top: 10px`,
      `margin-bottom: 3px`,
      ``,
      ``,
      `margin-top: 3px`,
      `margin: 10px 0; font-style: italic`
    );
  }
  // If the round result is a win
  if (roundResult === 1) {
    console.log(`Your choice         ${playerChoice}\n` +
      `Computer's choice   ${computerChoice}\n` +
      `%cYou win!\n` +
      `%cCurrent score\n` +
      `%c-------------\n` +
      `%cYou         ${playerScore}\n` +
      `%cComputer    ${computerScore}\n` +
      `%c-------------\n` +
      `%cEnd of round ${roundNumber + 1}`,
      `font-size: 14px; margin-top: 10px; color: #90EE90`,
      `margin-top: 10px`,
      `margin-bottom: 3px`,
      ``,
      ``,
      `margin-top: 3px`,
      `margin: 10px 0; font-style: italic`
    );
  }
  // If the round result is a loss
  if (roundResult === -1) {
    console.log(`Your choice         ${playerChoice}\n` +
      `Computer's choice   ${computerChoice}\n` +
      `%cYou lose!\n` +
      `%cCurrent score\n` +
      `%c-------------\n` +
      `%cYou         ${playerScore}\n` +
      `%cComputer    ${computerScore}\n` +
      `%c-------------\n` +
      `%cEnd of round ${roundNumber + 1}`,
      `font-size: 14px; margin-top: 10px; color: red`,
      `margin-top: 10px`,
      `margin-bottom: 3px`,
      ``,
      ``,
      `margin-top: 3px`,
      `margin: 10px 0; font-style: italic`
    );
  }
}

// Function to show the winner and final score
function showWinner() {
  // If player wins
  if (playerScore === 3) {
    console.log(`%cCongratulations! You win after ${roundNumber} rounds!`,
      `font-size: 14px; color: #90EE90; margin: 20px 0`
    );
  // If player loses
  } else if (computerScore === 3) {
    console.log(`%cUnfortunately, you lose after ${roundNumber} rounds.`,
      `font-size: 14px; color: red; margin: 20px 0`
    );
  }
  // Show the final score of game
  console.log(`%cFINAL SCORE\n` +
    `%c------------\n` +
    `%cYou        ${playerScore}\n` +
    `%cComputer   ${computerScore}\n` +
    `%c------------\n` +
    `%cThank you for playing!`,
    `margin: 5px 0; font-size: 14px`,
    `margin-bottom: 3px`,``,``,`margin-top: 3px`,
    `margin-top: 20px; font-size: 14px; font-style: italic`
  );
}