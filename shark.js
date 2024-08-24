// Shark object
class Shark {
    constructor() {
        this.x = 500;
        this.y = 500;
        this.speed = 10;
        this.image = new Image();
        this.image.src = 'shark.png';
    }

    // Move Shark
    move(x, y) {
        this.x += x;
        this.y += y;
    }

    // Draw Shark
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 50, 50);
    }
}

// Export Shark
export default Shark;
