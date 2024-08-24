// Function to save the game
export function saveGame() {
    const gameState = {
        finley: {
            x: finley.x,
            y: finley.y
        },
        puzzlePieces: puzzlePieces.map(piece => ({...piece, collected: piece.collected})),
        level: level,
        score: score
    };
    const gameData = JSON.stringify(gameState);
    localStorage.setItem('finleysSharkQuest', gameData);
}

// Function to load the game
export function loadGame() {
    const gameData = localStorage.getItem('finleysSharkQuest');
    if (gameData) {
        const gameState = JSON.parse(gameData);
        finley.x = gameState.finley.x;
        finley.y = gameState.finley.y;
        puzzlePieces = gameState.puzzlePieces;
        level = gameState.level;
        score = gameState.score;
    }
}
