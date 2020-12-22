const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const bg = new Image();
bg.src = "img/bg_01.svg" 

var spline;

function init() {
    ctx.globalAlpha = 1.0;

    spline = initTerrain(canvas.width, canvas.height);

    window.requestAnimationFrame(draw);
}

var tms = performance.now();
var x = 30;
var y = 30;

function draw() {
    // Advance time
    var t = performance.now();
    var dt = t - tms;
    tms = t;

    
    //ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    var fps = Math.round(1000 * 1/dt);
    ctx.fillStyle = 'black';
    ctx.fillText(`FPS: ${fps}`, 2, 10);
    
    //

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 100, 100);
    //

    var grad= ctx.createLinearGradient(canvas.width, canvas.height*0.6, canvas.width, canvas.height);
    grad.addColorStop(0, "orange");
    grad.addColorStop(1, "black");

    ctx.fillStyle = grad;
    ctx.beginPath();
        
    for (let i = 0; i < canvas.width; i++) {
        let h = spline.at(i);
        ctx.fillRect(i, h, 1, canvas.height - h);
        
        ctx.moveTo(i, h);
        ctx.lineTo(i+1, h+5);
    }
    ctx.stroke();
    
    //

    window.requestAnimationFrame(draw);
}

function moveLeft() {
    x = x - 10;
}

function moveRight() {
    x = x + 10;
} 

function moveUp() { 
    y = y - 10;
}

function moveDown() { 
    y = y + 10;
}

function newTerrain() { 
    spline = initTerrain(canvas.width, canvas.height);
}

function initTerrain(width, height) {

    const points = 8;

    let xs = [], ys = [];
    for (let i = 0; i <= points; i++) {
        xs.push(width * i / points);
        ys.push(Math.floor(Math.random() * height * 0.5 + height * 0.4));
    }

    //console.log(xs);
    //console.log(ys);

    return new Spline(xs, ys);
}
