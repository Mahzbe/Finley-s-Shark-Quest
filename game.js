import { levels, pieceTypes } from './puzzle.js';

const game = {
  level: 0,
  puzzle: levels[0],
  shark: {
    speed: levels[0].sharkBehavior.speed,
    aggression: levels[0].sharkBehavior.aggression,
    x: 0,
    y: 0
  },
  finley: {
    x: 0,
    y: 0
  },
  score: 0
};

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = 'background.png';

const finleyImage = new Image();
finleyImage.src = 'finley.png';

const sharkImage = new Image();
sharkImage.src = 'shark.png';

const puzzlePieceImage = new Image();
puzzlePieceImage.src = 'puzzle-piece.png';

function updateShark() {
  game.shark.speed = levels[game.level].sharkBehavior.speed;
  game.shark.aggression = levels[game.level].sharkBehavior.aggression;
}

function collectPiece(piece) {
  if (piece.type === 'slowDownShark') {
    pieceTypes.slowDownShark.effect(game);
    finleyDialogue("Ha! Take that, shark!");
    addSpeedLinesEffect();
  } else {
    finleyDialogue("Woohoo!");
    addSparkleEffect();
  }
}

function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowUp':
      game.finley.y -= 10;
      break;
    case 'ArrowDown':
      game.finley.y += 10;
      break;
    case 'ArrowLeft':
      game.finley.x -= 10;
      break;
    case 'ArrowRight':
      game.finley.x += 10;
      break;
  }
}

document.addEventListener('keydown', handleKeyPress);

function checkCollisions() {
  // Check for collisions with puzzle pieces
  game.puzzle.puzzlePieces.forEach((piece) => {
    if (checkCollision(game.finley, piece)) {
      collectPiece(piece);
    }
  });

  // Check for collisions with the shark
  if (checkCollision(game.finley, game.shark)) {
    finleyDialogue("Oh no!");
    addSplashingWaterEffect();
  }
}

function updateGame() {
  updateShark();
  checkCollisions();
  updateScore();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0);

  game.puzzle.puzzlePieces.forEach((piece) => {
    ctx.drawImage(piece.image, piece.x, piece.y);
  });

  ctx.drawImage(finleyImage, game.finley.x, game.finley.y);
  ctx.drawImage(sharkImage, game.shark.x, game.shark.y);

  ctx.font = '24px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`Score: ${game.score}`, 10, 10);
}

function gameLoop() {
  updateGame();
  render();
}

setInterval(gameLoop, 1000 / 60);

function finleyDialogue(dialogue) {
  switch (dialogue) {
    case "Woohoo!":
      document.getElementById("woohoo-sound").play();
      break;
    case "Ha! Take that, shark!":
      document.getElementById("ha-sound").play();
      break;
    case "Oh no!":
      document.getElementById("oh-no-sound").play();
      break;
  }
}

function addSparkleEffect() {
  // Add sparkle effect
}

function addSpeedLinesEffect() {
  // Add speed lines effect
}

function addSplashingWaterEffect() {
  // Add splashing water effect
}

function checkCollision(object1, object2) {
  // Basic collision detection
  if (
    object1.x < object2.x + object2.width &&
    object1.x + object1.width > object2.x &&
    object1.y < object2.y + object2.height &&
    object1.y + object1.height > object2.y
  ) {
    return true;
  }
  return false;
}

function updateScore() {
  // Update the score
  game.score++;
}
