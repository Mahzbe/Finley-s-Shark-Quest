// game.js
let game = {
  score: 0,
  shark: {
    speed: 1,
    aggression: 1
  },
  finley: {
    x: 100,
    y: 100
  }
};

function startGame() {
  console.log("Start game button clicked!");
  document.getElementById("start-menu").style.display = "none";
  document.getElementById("game-canvas").style.display = "block";
  // Initialize game logic here
}

// puzzle.js
const levels = [
  // Level 1
  {
    puzzlePieces: [
      { x: 100, y: 100, type: 'puzzle' },
      { x: 200, y: 200, type: 'puzzle' },
      { x: 300, y: 300, type: 'puzzle' }
    ],
    sharkBehavior: {
      speed: 1,
      aggression: 1
    },
    layout: [...]
  },
  // Add more levels here
];

const pieceTypes = {
  puzzle: {
    image: 'puzzle-piece.png',
    effect: (game) => {
      // Handle regular puzzle pieces
      game.score += 10;
      finleyDialogue("Woohoo!");
      addSparkleEffect();
    }
  },
  slowDownShark: {
    image: 'slow-down-shark.png',
    effect: (game) => {
      game.shark.speed -= 0.5;
      game.shark.aggression -= 0.5;
      finleyDialogue("Ha! Take that, shark!");
      addSpeedLinesEffect();
    }
  }
};

// finley.js
function finleyDialogue(text) {
  console.log(text);
  // Add dialogue logic here
}

// shark.js
function sharkAttack() {
  console.log("Shark attack!");
  // Add shark attack logic here
}
