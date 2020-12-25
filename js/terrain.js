class Terrain {

    constructor(xs, ys) {
        this.spline = new Spline(xs, ys);
    }

    static GenRandomPoints(width, heigh, points, hs, hm) {
        
        let xs = [], ys = [];

        for (let i = 0; i <= points; i++) {
            xs.push(width * i / points);
            ys.push(Math.floor(Math.random() * hs + hm));
        }

        return new Terrain(xs, ys)
    }

    static ProvidedPoints(xs, ys) {
        return new Terrain(xs, ys);
    }

    heightAt(x) {
        return this.spline.at(x)
    }

    draw(ctx) {
        let width = ctx.canvas.clientWidth, height = ctx.canvas.clientHeight;
        
        let grad = ctx.createLinearGradient(width, height*0.6, width, height);
        
        grad.addColorStop(0, "orange");
        grad.addColorStop(1, "black");

        ctx.fillStyle = grad;
        ctx.beginPath();
            
        for (let i = 0; i < width; i++) {
            let h = this.heightAt(i);
            ctx.fillRect(i, h, 1, height - h);
            
            ctx.moveTo(i, h);
            ctx.lineTo(i+1, h+5);
        }
        ctx.stroke();
    }
}
