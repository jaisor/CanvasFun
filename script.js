const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

var game;

function init() {
    ctx.globalAlpha = 1.0;
    game = new Game();
    window.requestAnimationFrame(draw);
}

var x = 30;
var y = 30;

function draw() {
    game.draw(ctx);
    
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 100, 100);

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
    game.terrain = Terrain.GenRandomPoints(canvas.width, canvas.height, 8, canvas.height*0.5, canvas.height*0.4);
}

