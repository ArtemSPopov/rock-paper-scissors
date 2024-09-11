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
// Initialize computer's and player's choice variables
let computerChoice, playerChoice;

// Create a function to get computer's choice
  // Get a random choice (1 out of 3)
  // Convert the choice into text to present to player later
  // Assign computer's choice to the variable
// Create a function to get player's choice
  // Prompt player to input their choice
  // Assign player's choice to the variable
// If player's choice is invalid, present the error and repeat the prompt
// If player chose *rock*, then
  // if computer chose *rock*, declare a tie
  // if computer chose *paper*, declare computer as the winner of the round...
    // ... increase computer's score
  // if computer chose *scissors*, declare player as the winner of the round...
    // ... increase player's score
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
// if computer's points are equal to 3, declare that player lost the game
// if player's points are equal to 3, declare that player won the game
// if no one has 3 points yet, play another round
