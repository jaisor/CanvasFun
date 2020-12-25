class Game {

    constructor() {
        this.terrain = new Terrain(
            [0, 135, 270, 405, 540, 675, 810, 945, 1080], 
            [440, 520, 414, 497, 398, 587, 534, 480, 415]
        );

        this.tms = performance.now();
        
        this.background = new Image();
        this.background.src = "img/bg_01.svg" 
    }

    draw(ctx) {
        // Advance time
        let t = performance.now();
        let dt = t - this.tms;
        this.tms = t;

        let width = ctx.canvas.clientWidth, height = ctx.canvas.clientHeight;

        //ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, width, height); // clear canvas
        ctx.drawImage(this.background, 0, 0, width, height);

        var fps = Math.round(1000 * 1/dt);
        ctx.fillStyle = 'white';
        ctx.fillText(`FPS: ${fps}`, 2, 10);
        
        //

        this.terrain.draw(ctx);
        
        //

    }
}