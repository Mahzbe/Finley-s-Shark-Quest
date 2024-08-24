const levels = [
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
  {
    puzzlePieces: [
      { x: 100, y: 100, type: 'slowDownShark' },
      { x: 200, y: 200, type: 'puzzle' },
      { x: 300, y: 300, type: 'puzzle' }
    ],
    sharkBehavior: {
      speed: 2,
      aggression: 1
    },
    layout: [...]
  },
  {
    puzzlePieces: [
      { x: 100, y: 100, type: 'slowDownShark' },
      { x: 200, y: 200, type: 'slowDownShark' },
      { x: 300, y: 300, type: 'puzzle' },
      { x: 400, y: 400, type: 'puzzle' }
    ],
    sharkBehavior: {
      speed: 3,
      aggression: 2
    },
    layout: [...]
  },
  // ... (add more levels up to 15)
  {
    puzzlePieces: [
      { x: 100, y: 100, type: 'slowDownShark' },
      { x: 200, y: 200, type: 'slowDownShark' },
      { x: 300, y: 300, type: 'slowDownShark' },
      { x: 400, y: 400, type: 'puzzle' },
      { x: 500, y: 500, type: 'puzzle' }
    ],
    sharkBehavior: {
      speed: 5,
      aggression: 4
    },
    layout: [...]
  }
];

const pieceTypes = {
  puzzle: {
    image: 'puzzle-piece.png',
    effect: (game) => {
      // Handle regular puzzle pieces
    }
  },
  slowDownShark: {
    image: 'slow-down-shark.png',
    effect: (game) => {
      game.shark.speed -= 0.5;
      game.shark.aggression -= 0.5;
    }
  }
};

export { levels, pieceTypes };
