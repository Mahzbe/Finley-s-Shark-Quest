// game.js

// Initialize game variables
var finley;
var shark;
var currentHouse;
var currentBackground;
var colorBlocks;

// Function to initialize the game
function initGame() {
  // Initialize Finley and Shark objects
  finley = new Finley();
  shark = new Shark();

  // Set initial house and background
  currentHouse = 1;
  currentBackground = "ocean";

  // Initialize color blocks
  colorBlocks = [];
}

// Finley object
function Finley() {
  this.x = 100; // initial x position
  this.y = 100; // initial y position
  this.speed = 5; // movement speed
}

// Shark object
function Shark() {
  this.x = 500; // initial x position
  this.y = 500; // initial y position
  this.speed = 10; // movement speed
}

// Function to handle user input (e.g., keyboard or touch events)
function handleInput() {
  // TO DO: Add input handling code here
}

// Function to update game state
function updateGame() {
  // TO DO: Add game logic updates here
}

// Function to render the game
function renderGame() {
  // TO DO: Add rendering code here
}

// Call the initGame function to start the game
initGame();
