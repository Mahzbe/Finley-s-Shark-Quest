// Finley object
class Finley {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.speed = 5;
        this.image = new Image();
        this.image.src = 'finley.png';
    }

    // Move Finley
    move(x, y) {
        this.x += x;
        this.y += y;
    }

    // Draw Finley
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 50, 50);
    }
}

// Export Finley
export default Finley;
