const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const bg = new Image();
bg.src = "img/bg_01.svg" 

function init() {
    window.requestAnimationFrame(draw);
}

var tms = performance.now();
var x = 30;
var y = 30;

function draw() {
    //ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    // Advance time
    var t = performance.now();
    var dt = t - tms;
    tms = t;

    var fps = Math.round(1000 * 1/dt);
    ctx.fillStyle = 'black';
    ctx.fillText(`FPS: ${fps}`, 2, 10);
    
    //
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 100, 100);
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

